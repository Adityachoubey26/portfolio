import type { Document, Types } from 'mongoose';

export type AdminRole = 'admin';

export interface AuthUser {
  id: string;
  email: string;
  role: AdminRole;
}

export interface AdminDocument extends Document {
  email: string;
  passwordHash: string;
  role: AdminRole;
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface RefreshTokenDocument extends Document {
  adminId: Types.ObjectId;
  tokenId: string;
  tokenHash: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSessionResponse {
  user: AuthUser;
}
