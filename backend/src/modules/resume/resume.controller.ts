import { createCrudController } from '../../utils/createCrudController.js';
import { resumeService } from './resume.service.js';

export const resumeController = createCrudController(resumeService, 'Resume');
