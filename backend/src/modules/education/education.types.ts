import type { Document, Types } from 'mongoose';

export interface IEducation {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  logo?: string;
  order: number;
  isPublished: boolean;
}

export interface EducationDocument extends IEducation, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateEducationInput = IEducation;
export type UpdateEducationInput = Partial<IEducation>;
