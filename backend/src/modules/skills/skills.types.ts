import type { Document, Types } from 'mongoose';

export interface SkillItem {
  name: string;
  icon: string;
}

export interface ISkills {
  category: string;
  skills: SkillItem[];
  order: number;
  isPublished: boolean;
}

export interface SkillsDocument extends ISkills, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSkillsInput = ISkills;
export type UpdateSkillsInput = Partial<ISkills>;
