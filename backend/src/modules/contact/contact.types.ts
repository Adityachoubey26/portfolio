import type { Document, Types } from 'mongoose';

export type ContactSubmissionStatus = 'new' | 'read' | 'replied';

export interface IContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  formActionUrl: string;
  address?: string;
  order: number;
  isPublished: boolean;
}

export interface IContactSubmission {
  name: string;
  email: string;
  message: string;
  subject?: string;
  status: ContactSubmissionStatus;
}

export interface ContactInfoDocument extends IContactInfo, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactSubmissionDocument extends IContactSubmission, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateContactInfoInput = IContactInfo;
export type UpdateContactInfoInput = Partial<IContactInfo>;
export type CreateContactSubmissionInput = IContactSubmission;
export type UpdateContactSubmissionInput = Partial<IContactSubmission>;
