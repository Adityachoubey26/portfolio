import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { achievementController } from './achievements.controller.js';
import {
  achievementIdSchema,
  createAchievementSchema,
  updateAchievementSchema,
} from './achievements.validator.js';

export default mountCrudRoutes(achievementController, {
  create: createAchievementSchema,
  update: updateAchievementSchema,
  id: achievementIdSchema,
});
