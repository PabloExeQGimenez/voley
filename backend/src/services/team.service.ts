import { prisma } from '../db/prisma.js';

export const teamsService = {
  list: () => prisma.team.findMany({ orderBy: { name: 'asc' } }),
  create: (name: string) => prisma.team.create({ data: { name } }),
  remove: (id: string) => prisma.team.delete({ where: { id } }),
};
