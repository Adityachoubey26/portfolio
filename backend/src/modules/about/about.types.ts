import type { Document, Types } from 'mongoose';

export interface StatItem {
  value: string;
  label: string;
}

export interface IAbout {
  label: string;
  title: string;
  paragraphs: string[];
  stats: StatItem[];
  image?: string;
  order: number;
  isPublished: boolean;
}

export interface AboutDocument extends IAbout, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateAboutInput = IAbout;
export type UpdateAboutInput = Partial<IAbout>;
