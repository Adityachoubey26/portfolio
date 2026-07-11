import { createCrudController } from '../../utils/createCrudController.js';
import { socialService } from './social.service.js';

export const socialController = createCrudController(socialService, 'Social');
