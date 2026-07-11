import type { Document, Types } from 'mongoose';

export interface IResume {
  fileName: string;
  fileUrl: string;
  fileSize?: number;
  mimeType?: string;
  version?: string;
  isActive: boolean;
  isPublished: boolean;
}

export interface ResumeDocument extends IResume, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateResumeInput = IResume;
export type UpdateResumeInput = Partial<IResume>;
