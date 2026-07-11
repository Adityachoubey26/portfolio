import { Schema, model } from 'mongoose';
import type { ProjectDocument } from './projects.types.js';

const detailedFeatureSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
  },
  { _id: false }
);

const projectSchema = new Schema<ProjectDocument>(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    detailedDescription: { type: String, required: true, trim: true },
    problemText: { type: String, required: true, trim: true },
    solutionText: { type: String, required: true, trim: true },
    impactItems: { type: [String], default: [] },
    techStack: { type: [String], default: [] },
    detailedFeatures: { type: [detailedFeatureSchema], default: [] },
    github: { type: String, trim: true },
    live: { type: String, trim: true },
    images: { type: [String], default: [] },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

projectSchema.index({ isPublished: 1, order: 1 });

export const ProjectModel = model<ProjectDocument>('Project', projectSchema);
