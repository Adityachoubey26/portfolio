import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { certificationController } from './certifications.controller.js';
import {
  certificationIdSchema,
  createCertificationSchema,
  updateCertificationSchema,
} from './certifications.validator.js';

export default mountCrudRoutes(certificationController, {
  create: createCertificationSchema,
  update: updateCertificationSchema,
  id: certificationIdSchema,
});
