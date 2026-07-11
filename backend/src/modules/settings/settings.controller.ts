import { createCrudController } from '../../utils/createCrudController.js';
import { settingsService } from './settings.service.js';

export const settingsController = createCrudController(settingsService, 'Settings');
