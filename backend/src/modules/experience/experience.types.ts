import type { Document, Types } from 'mongoose';

export interface IExperience {
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
  order: number;
  isPublished: boolean;
}

export interface ExperienceDocument extends IExperience, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateExperienceInput = IExperience;
export type UpdateExperienceInput = Partial<IExperience>;
