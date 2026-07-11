import { createCrudController } from '../../utils/createCrudController.js';
import { aboutService } from './about.service.js';

export const aboutController = createCrudController(aboutService, 'About');
