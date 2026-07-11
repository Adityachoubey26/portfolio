import type { Document, Types } from 'mongoose';

export interface CtaLink {
  label: string;
  url: string;
}

export interface IHero {
  badge: string;
  name: string;
  headline: string;
  subheadline?: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  image: string;
  location: string;
  order: number;
  isPublished: boolean;
}

export interface HeroDocument extends IHero, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateHeroInput = IHero;
export type UpdateHeroInput = Partial<IHero>;
