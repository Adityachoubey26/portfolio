import type { Document, Types } from 'mongoose';

export interface ISeo {
  pageKey: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  robots?: string;
  isPublished: boolean;
}

export interface SeoDocument extends ISeo, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSeoInput = ISeo;
export type UpdateSeoInput = Partial<ISeo>;
