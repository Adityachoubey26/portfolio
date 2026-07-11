import { createCrudService } from '../../utils/createCrudService.js';
import { ProjectModel } from './projects.model.js';

export const projectService = createCrudService(ProjectModel, ['title', 'slug', 'category']);
