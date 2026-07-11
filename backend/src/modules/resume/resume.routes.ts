import { mountCrudRoutes } from '../../utils/mountCrudRoutes.js';
import { resumeController } from './resume.controller.js';
import { createResumeSchema, resumeIdSchema, updateResumeSchema } from './resume.validator.js';

export default mountCrudRoutes(resumeController, {
  create: createResumeSchema,
  update: updateResumeSchema,
  id: resumeIdSchema,
});
