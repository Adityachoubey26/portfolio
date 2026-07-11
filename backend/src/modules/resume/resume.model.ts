import { Schema, model } from 'mongoose';
import type { ResumeDocument } from './resume.types.js';

const resumeSchema = new Schema<ResumeDocument>(
  {
    fileName: { type: String, required: true, trim: true },
    fileUrl: { type: String, required: true, trim: true },
    fileSize: { type: Number },
    mimeType: { type: String, trim: true },
    version: { type: String, trim: true },
    isActive: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

resumeSchema.index({ isPublished: 1, isActive: 1 });

export const ResumeModel = model<ResumeDocument>('Resume', resumeSchema);
