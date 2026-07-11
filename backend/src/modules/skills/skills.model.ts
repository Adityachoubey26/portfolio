import { Schema, model } from 'mongoose';
import type { SkillsDocument } from './skills.types.js';

const skillItemSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const skillsSchema = new Schema<SkillsDocument>(
  {
    category: { type: String, required: true, trim: true },
    skills: { type: [skillItemSchema], default: [] },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

skillsSchema.index({ isPublished: 1, order: 1 });

export const SkillsModel = model<SkillsDocument>('Skills', skillsSchema);
