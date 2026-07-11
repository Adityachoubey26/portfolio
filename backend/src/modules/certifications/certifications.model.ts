import { Schema, model } from 'mongoose';
import type { CertificationDocument } from './certifications.types.js';

const certificationSchema = new Schema<CertificationDocument>(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    issueDate: { type: String, required: true, trim: true },
    expiryDate: { type: String, trim: true },
    credentialId: { type: String, trim: true },
    credentialUrl: { type: String, trim: true },
    logo: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

certificationSchema.index({ isPublished: 1, order: 1 });

export const CertificationModel = model<CertificationDocument>(
  'Certification',
  certificationSchema
);
