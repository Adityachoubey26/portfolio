import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { projectController } from './projects.controller.js';
import {
  createProjectSchema,
  projectIdSchema,
  updateProjectSchema,
} from './projects.validator.js';

export default mountCrudRoutes(projectController, {
  create: createProjectSchema,
  update: updateProjectSchema,
  id: projectIdSchema,
});
