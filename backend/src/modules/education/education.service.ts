import { createCrudService } from '../../utils/createCrudService.js';
import { EducationModel } from './education.model.js';

export const educationService = createCrudService(EducationModel, ['title', 'subtitle']);
