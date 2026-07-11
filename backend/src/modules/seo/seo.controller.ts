import { createCrudController } from '../../utils/createCrudController.js';
import { seoService } from './seo.service.js';

export const seoController = createCrudController(seoService, 'Seo');
