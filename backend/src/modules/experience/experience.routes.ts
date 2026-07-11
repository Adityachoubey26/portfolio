import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { experienceController } from './experience.controller.js';
import {
  createExperienceSchema,
  experienceIdSchema,
  updateExperienceSchema,
} from './experience.validator.js';

export default mountCrudRoutes(experienceController, {
  create: createExperienceSchema,
  update: updateExperienceSchema,
  id: experienceIdSchema,
});
