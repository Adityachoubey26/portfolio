import type { Model } from 'mongoose';
import type { PaginationQuery } from '../types/common.js';
import { deleteByIdOrFail, getByIdOrFail, paginateModel, updateByIdOrFail } from './crud.js';

export const createCrudService = <T>(model: Model<T>, searchFields: string[] = []) => ({
  async getAll(query: PaginationQuery) {
    return paginateModel(model, query, {}, searchFields);
  },

  async getById(id: string) {
    return getByIdOrFail(model, id);
  },

  async create(payload: unknown) {
    return model.create(payload as Partial<T>);
  },

  async update(id: string, payload: unknown) {
    return updateByIdOrFail(model, id, payload as Partial<T>);
  },

  async remove(id: string) {
    return deleteByIdOrFail(model, id);
  },
});
