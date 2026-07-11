import { createCrudController } from '../../utils/createCrudController.js';
import { projectService } from './projects.service.js';

export const projectController = createCrudController(projectService, 'Project');
