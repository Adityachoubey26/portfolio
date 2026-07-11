import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { settingsController } from './settings.controller.js';
import {
  createSettingsSchema,
  settingsIdSchema,
  updateSettingsSchema,
} from './settings.validator.js';

export default mountCrudRoutes(settingsController, {
  create: createSettingsSchema,
  update: updateSettingsSchema,
  id: settingsIdSchema,
});
