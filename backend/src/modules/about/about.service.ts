import { createCrudService } from '../../utils/createCrudService.js';
import { AboutModel } from './about.model.js';

export const aboutService = createCrudService(AboutModel, ['label', 'title']);
