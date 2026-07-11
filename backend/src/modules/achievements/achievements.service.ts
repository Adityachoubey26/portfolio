import { createCrudService } from '../../utils/createCrudService.js';
import { AchievementModel } from './achievements.model.js';

export const achievementService = createCrudService(AchievementModel, ['title']);
