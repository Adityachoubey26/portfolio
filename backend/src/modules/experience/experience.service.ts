import { createCrudService } from '../../utils/createCrudService.js';
import { ExperienceModel } from './experience.model.js';

export const experienceService = createCrudService(ExperienceModel, ['role', 'company']);
