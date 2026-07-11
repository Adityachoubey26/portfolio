import { Schema, model } from 'mongoose';
import type { ContactInfoDocument, ContactSubmissionDocument } from './contact.types.js';

const contactInfoSchema = new Schema<ContactInfoDocument>(
  {
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    whatsapp: { type: String, required: true, trim: true },
    formActionUrl: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

contactInfoSchema.index({ isPublished: 1, order: 1 });

const contactSubmissionSchema = new Schema<ContactSubmissionDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    subject: { type: String, trim: true },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
  },
  { timestamps: true }
);

contactSubmissionSchema.index({ status: 1, createdAt: -1 });

export const ContactInfoModel = model<ContactInfoDocument>('ContactInfo', contactInfoSchema);
export const ContactSubmissionModel = model<ContactSubmissionDocument>(
  'ContactSubmission',
  contactSubmissionSchema
);
