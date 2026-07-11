import { createCrudController } from '../../utils/createCrudController.js';
import { certificationService } from './certifications.service.js';

export const certificationController = createCrudController(
  certificationService,
  'Certification'
);
