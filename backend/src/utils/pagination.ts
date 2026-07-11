import type { PaginationMeta, PaginationQuery } from '../types/common.js';

export const parsePaginationQuery = (query: Record<string, unknown>): PaginationQuery => {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 10));
  const skip = (page - 1) * limit;
  const search = typeof query.search === 'string' ? query.search.trim() : undefined;
  const isPublished =
    query.isPublished === undefined
      ? undefined
      : query.isPublished === 'true' || query.isPublished === true;

  return { page, limit, skip, search, isPublished };
};

export const buildPaginationMeta = (
  total: number,
  page: number,
  limit: number
): PaginationMeta => {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};
