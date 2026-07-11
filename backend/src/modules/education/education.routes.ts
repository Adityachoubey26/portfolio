import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { educationController } from './education.controller.js';
import {
  createEducationSchema,
  educationIdSchema,
  updateEducationSchema,
} from './education.validator.js';

export default mountCrudRoutes(educationController, {
  create: createEducationSchema,
  update: updateEducationSchema,
  id: educationIdSchema,
});
