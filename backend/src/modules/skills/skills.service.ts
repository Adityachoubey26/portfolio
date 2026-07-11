import { createCrudService } from '../../utils/createCrudService.js';
import { SkillsModel } from './skills.model.js';

export const skillsService = createCrudService(SkillsModel, ['category']);
