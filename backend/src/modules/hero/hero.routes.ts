import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { heroController } from './hero.controller.js';
import { createHeroSchema, heroIdSchema, updateHeroSchema } from './hero.validator.js';

export default mountCrudRoutes(heroController, {
  create: createHeroSchema,
  update: updateHeroSchema,
  id: heroIdSchema,
});
