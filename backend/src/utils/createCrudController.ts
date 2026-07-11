import type { Request, Response } from 'express';
import { asyncHandler } from './asyncHandler.js';
import { sendCreated, sendPaginated, sendSuccess } from './apiResponse.js';
import { parsePaginationQuery } from './pagination.js';

type ServiceLike = {
  getAll: (query: ReturnType<typeof parsePaginationQuery>) => Promise<{
    items: unknown[];
    pagination: import('../types/common.js').PaginationMeta;
  }>;
  getById: (id: string) => Promise<unknown>;
  create: (payload: unknown) => Promise<unknown>;
  update: (id: string, payload: unknown) => Promise<unknown>;
  remove: (id: string) => Promise<unknown>;
};

export const createCrudController = (service: ServiceLike, resourceName: string) => ({
  getAll: asyncHandler(async (req: Request, res: Response) => {
    const query = parsePaginationQuery(req.query as Record<string, unknown>);
    const { items, pagination } = await service.getAll(query);
    sendPaginated(res, items, pagination, `${resourceName} records fetched successfully`);
  }),

  getById: asyncHandler(async (req: Request, res: Response) => {
    const item = await service.getById(req.params.id);
    sendSuccess(res, item, `${resourceName} record fetched successfully`);
  }),

  create: asyncHandler(async (req: Request, res: Response) => {
    const item = await service.create(req.body);
    sendCreated(res, item, `${resourceName} record created successfully`);
  }),

  update: asyncHandler(async (req: Request, res: Response) => {
    const item = await service.update(req.params.id, req.body);
    sendSuccess(res, item, `${resourceName} record updated successfully`);
  }),

  remove: asyncHandler(async (req: Request, res: Response) => {
    await service.remove(req.params.id);
    res.status(204).send();
  }),
});
