import { createCrudService } from '../../utils/createCrudService.js';
import { ContactInfoModel, ContactSubmissionModel } from './contact.model.js';

export const contactInfoService = createCrudService(ContactInfoModel, ['email', 'phone']);
export const contactSubmissionService = createCrudService(ContactSubmissionModel, [
  'name',
  'email',
]);
