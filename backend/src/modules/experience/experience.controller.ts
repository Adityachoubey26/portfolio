import { createCrudController } from '../../utils/createCrudController.js';
import { experienceService } from './experience.service.js';

export const experienceController = createCrudController(experienceService, 'Experience');
