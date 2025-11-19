import { Router } from 'express';
import { prisma } from '../db/prisma.js';

export const healtRouter = Router();

healtRouter.get('/', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true });
  } catch {
    res.status(500).json({ ok: false });
  }
});
