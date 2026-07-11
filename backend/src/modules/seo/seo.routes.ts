import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { seoController } from './seo.controller.js';
import { createSeoSchema, seoIdSchema, updateSeoSchema } from './seo.validator.js';

export default mountCrudRoutes(seoController, {
  create: createSeoSchema,
  update: updateSeoSchema,
  id: seoIdSchema,
});
