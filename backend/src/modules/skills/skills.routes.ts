import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { skillsController } from './skills.controller.js';
import { createSkillsSchema, skillsIdSchema, updateSkillsSchema } from './skills.validator.js';

export default mountCrudRoutes(skillsController, {
  create: createSkillsSchema,
  update: updateSkillsSchema,
  id: skillsIdSchema,
});
