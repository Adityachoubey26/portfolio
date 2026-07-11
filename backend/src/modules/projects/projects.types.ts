import type { Document, Types } from 'mongoose';

export interface DetailedFeature {
  title: string;
  description: string;
  icon: string;
}

export interface IProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  problemText: string;
  solutionText: string;
  impactItems: string[];
  techStack: string[];
  detailedFeatures: DetailedFeature[];
  github?: string;
  live?: string;
  images: string[];
  order: number;
  isPublished: boolean;
  isFeatured: boolean;
}

export interface ProjectDocument extends IProject, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProjectInput = IProject;
export type UpdateProjectInput = Partial<IProject>;
