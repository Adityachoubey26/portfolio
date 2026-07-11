import type { Document, Types } from 'mongoose';

export interface ICertification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  order: number;
  isPublished: boolean;
}

export interface CertificationDocument extends ICertification, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCertificationInput = ICertification;
export type UpdateCertificationInput = Partial<ICertification>;
