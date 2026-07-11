import { Types, type FilterQuery, type Model } from 'mongoose';
import { AppError } from '../middleware/errorHandler.js';
import type { PaginationQuery } from '../types/common.js';
import { buildPaginationMeta } from './pagination.js';

export const ensureObjectId = (id: string): Types.ObjectId => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError('Invalid document ID', 400);
  }
  return new Types.ObjectId(id);
};

export const paginateModel = async <T>(
  model: Model<T>,
  query: PaginationQuery,
  baseFilter: FilterQuery<T> = {},
  searchFields: string[] = []
) => {
  const filter: FilterQuery<T> = { ...baseFilter };

  if (query.isPublished !== undefined) {
    (filter as Record<string, unknown>).isPublished = query.isPublished;
  }

  if (query.search && searchFields.length > 0) {
    (filter as Record<string, unknown>).$or = searchFields.map((field) => ({
      [field]: { $regex: query.search, $options: 'i' },
    }));
  }

  const [items, total] = await Promise.all([
    model.find(filter).sort({ order: 1, createdAt: -1 }).skip(query.skip).limit(query.limit),
    model.countDocuments(filter),
  ]);

  return {
    items,
    pagination: buildPaginationMeta(total, query.page, query.limit),
  };
};

export const getByIdOrFail = async <T>(model: Model<T>, id: string) => {
  const doc = await model.findById(ensureObjectId(id));
  if (!doc) {
    throw new AppError('Resource not found', 404);
  }
  return doc;
};

export const updateByIdOrFail = async <T>(
  model: Model<T>,
  id: string,
  payload: Partial<T>
) => {
  const doc = await model.findByIdAndUpdate(ensureObjectId(id), payload, {
    new: true,
    runValidators: true,
  });
  if (!doc) {
    throw new AppError('Resource not found', 404);
  }
  return doc;
};

export const deleteByIdOrFail = async <T>(model: Model<T>, id: string) => {
  const doc = await model.findByIdAndDelete(ensureObjectId(id));
  if (!doc) {
    throw new AppError('Resource not found', 404);
  }
  return doc;
};
