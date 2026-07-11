import { createCrudController } from '../../utils/createCrudController.js';
import { educationService } from './education.service.js';

export const educationController = createCrudController(educationService, 'Education');
