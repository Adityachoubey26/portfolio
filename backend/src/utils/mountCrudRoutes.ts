import { Router } from 'express';
import type { ZodSchema } from 'zod';
import { validate } from '../middleware/validate.js';
import { paginationQuerySchema } from './validators.js';
import type { createCrudController } from './createCrudController.js';

export const mountCrudRoutes = (
  controller: ReturnType<typeof createCrudController>,
  schemas: {
    create: ZodSchema;
    update: ZodSchema;
    id: ZodSchema;
  }
) => {
  const router = Router();

  router.get('/', validate(paginationQuerySchema, 'query'), controller.getAll);
  router.get('/:id', validate(schemas.id, 'params'), controller.getById);
  router.post('/', validate(schemas.create), controller.create);
  router.put('/:id', validate(schemas.id, 'params'), validate(schemas.update), controller.update);
  router.delete('/:id', validate(schemas.id, 'params'), controller.remove);

  return router;
};
