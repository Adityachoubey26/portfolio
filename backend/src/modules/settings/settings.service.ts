import { createCrudService } from '../../utils/createCrudService.js';
import { SettingsModel } from './settings.model.js';

export const settingsService = createCrudService(SettingsModel, ['siteName']);
