import { createCrudService } from '../../utils/createCrudService.js';
import { SeoModel } from './seo.model.js';

export const seoService = createCrudService(SeoModel, ['pageKey', 'metaTitle']);
