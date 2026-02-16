import { Injectable, BadRequestException } from '@nestjs/common';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';

@Injectable()
export class UploadService {
    private readonly s3Client: S3Client;
    private readonly bucketName: string;
    private readonly publicUrl: string;

    constructor() {
        this.s3Client = new S3Client({
            region: 'auto',
            endpoint: process.env.R2_ENDPOINT,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID!,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
            },
        });

        this.bucketName = process.env.R2_BUCKET_NAME!;
        this.publicUrl = process.env.R2_PUBLIC_URL!;
    }

    /**
     * Upload file to R2
     * @param file - Multer file object
     * @param folder - Folder name in bucket (e.g., 'avatars')
     * @returns Public URL of the uploaded file
     */
    async uploadFile(file: Express.Multer.File, folder: string = 'avatars'): Promise<string> {
        // Validate file type
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new BadRequestException('Only image files (JPEG, PNG, WebP, GIF) are allowed');
        }

        // Validate file size (max 5MB)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            throw new BadRequestException('File size must not exceed 5MB');
        }

        // Generate unique filename
        const fileExtension = file.originalname.split('.').pop();
        const fileName = `${folder}/${randomUUID()}.${fileExtension}`;

        // Upload to R2
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype,
        });

        await this.s3Client.send(command);

        // Return public URL
        return `${this.publicUrl}/${fileName}`;
    }

    /**
     * Delete file from R2
     * @param fileUrl - Full public URL of the file
     */
    async deleteFile(fileUrl: string): Promise<void> {
        try {
            // Extract key from URL: https://hoangdinhlamhai.works/avatars/xxx.png -> avatars/xxx.png
            const key = fileUrl.replace(`${this.publicUrl}/`, '');

            const command = new DeleteObjectCommand({
                Bucket: this.bucketName,
                Key: key,
            });

            await this.s3Client.send(command);
        } catch (error) {
            // Log error but don't throw - old file deletion shouldn't block the upload
            console.error('Failed to delete old file from R2:', error);
        }
    }
}
