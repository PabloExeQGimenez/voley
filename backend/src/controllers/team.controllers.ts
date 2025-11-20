import { Request, Response, NextFunction } from 'express';
import { teamsService } from '../services/team.service.js';

export const teamsController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await teamsService.list();
      return res.json(teams);
    } catch (err) {
      return next(err);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body as { name: string };
      const team = await teamsService.create(name);
      return res.json(team);
    } catch (err) {
      return next(err);
    }
  },

  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params as { id: string };
      await teamsService.remove(id);
      return res.send();
    } catch (err) {
      next(err);
    }
  },
};
