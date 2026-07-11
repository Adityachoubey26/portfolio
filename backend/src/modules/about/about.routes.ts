import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { aboutController } from './about.controller.js';
import { createAboutSchema, aboutIdSchema, updateAboutSchema } from './about.validator.js';

export default mountCrudRoutes(aboutController, {
  create: createAboutSchema,
  update: updateAboutSchema,
  id: aboutIdSchema,
});
