import { createCrudService } from '../../utils/createCrudService.js';
import { ResumeModel } from './resume.model.js';

export const resumeService = createCrudService(ResumeModel, ['fileName']);
