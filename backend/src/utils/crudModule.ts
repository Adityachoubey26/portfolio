import type { Model } from 'mongoose';
import type { PaginationQuery } from '../types/common.js';
import { createCrudService } from './createCrudService.js';
import { createCrudController } from './createCrudController.js';
import { mountCrudRoutes } from './mountCrudRoutes.js';

export { createCrudService, createCrudController, mountCrudRoutes };

export type CrudModuleBundle = ReturnType<typeof buildCrudModule>;

export const buildCrudModule = <T>(
  model: Model<T>,
  resourceName: string,
  searchFields: string[],
  schemas: {
    create: import('zod').ZodSchema;
    update: import('zod').ZodSchema;
    id: import('zod').ZodSchema;
  }
) => {
  const service = createCrudService(model, searchFields);
  const controller = createCrudController(service, resourceName);
  const routes = mountCrudRoutes(controller, schemas);
  return { service, controller, routes };
};
