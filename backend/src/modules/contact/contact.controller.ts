import { createCrudController } from '../../utils/createCrudController.js';
import { contactInfoService, contactSubmissionService } from './contact.service.js';

export const contactInfoController = createCrudController(contactInfoService, 'ContactInfo');
export const contactSubmissionController = createCrudController(
  contactSubmissionService,
  'ContactSubmission'
);
