import type { Document, Types } from 'mongoose';

export interface IAchievement {
  title: string;
  description: string;
  date: string;
  icon: string;
  url?: string;
  order: number;
  isPublished: boolean;
}

export interface AchievementDocument extends IAchievement, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateAchievementInput = IAchievement;
export type UpdateAchievementInput = Partial<IAchievement>;
