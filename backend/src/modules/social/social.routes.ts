import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { socialController } from './social.controller.js';
import { createSocialSchema, socialIdSchema, updateSocialSchema } from './social.validator.js';

export default mountCrudRoutes(socialController, {
  create: createSocialSchema,
  update: updateSocialSchema,
  id: socialIdSchema,
});
