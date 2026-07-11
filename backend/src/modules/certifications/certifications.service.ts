import { createCrudService } from '../../utils/createCrudService.js';
import { CertificationModel } from './certifications.model.js';

export const certificationService = createCrudService(CertificationModel, ['title', 'issuer']);
