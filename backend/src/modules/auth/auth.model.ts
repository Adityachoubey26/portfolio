import { Schema, model } from 'mongoose';
import type { AdminDocument, RefreshTokenDocument } from './auth.types.js';

const adminSchema = new Schema<AdminDocument>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ['admin'], default: 'admin', required: true },
    isActive: { type: Boolean, default: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

const refreshTokenSchema = new Schema<RefreshTokenDocument>(
  {
    adminId: { type: Schema.Types.ObjectId, ref: 'Admin', required: true, index: true },
    tokenId: { type: String, required: true, unique: true },
    tokenHash: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const AdminModel = model<AdminDocument>('Admin', adminSchema);
export const RefreshTokenModel = model<RefreshTokenDocument>('RefreshToken', refreshTokenSchema);
