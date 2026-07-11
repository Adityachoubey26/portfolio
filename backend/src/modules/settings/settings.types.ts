import type { Document, Types } from 'mongoose';

export interface ISettings {
  siteName: string;
  tagline?: string;
  logo?: string;
  favicon?: string;
  maintenanceMode: boolean;
  contactEmail?: string;
  analyticsId?: string;
  isPublished: boolean;
}

export interface SettingsDocument extends ISettings, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSettingsInput = ISettings;
export type UpdateSettingsInput = Partial<ISettings>;
