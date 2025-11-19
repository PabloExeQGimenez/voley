import { ZodType } from 'zod';
import { RequestHandler } from 'express';

export const validate =
  (schema: ZodType): RequestHandler =>
  (req, _res, next) => {
    const parsed = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    if (!parsed.success) return next(parsed.error);
    Object.assign(req, parsed.data);
    return next();
  };
