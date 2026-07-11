import { createCrudController } from '../../utils/createCrudController.js';
import { skillsService } from './skills.service.js';

export const skillsController = createCrudController(skillsService, 'Skills');
