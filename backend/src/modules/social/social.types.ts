import type { Document, Types } from 'mongoose';

export interface ISocial {
  platform: string;
  label: string;
  url: string;
  icon?: string;
  order: number;
  isPublished: boolean;
}

export interface SocialDocument extends ISocial, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSocialInput = ISocial;
export type UpdateSocialInput = Partial<ISocial>;
