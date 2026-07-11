import { createCrudController } from '../../utils/createCrudController.js';
import { achievementService } from './achievements.service.js';

export const achievementController = createCrudController(achievementService, 'Achievement');
