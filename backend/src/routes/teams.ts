import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import { createTeamSchema, paramsIdSchema } from '../schemas/team.schema.js';
import { teamsController } from '@/controllers/team.controllers.js';

export const teamsRouter = Router();

teamsRouter.get('/', teamsController.list);
teamsRouter.post('/', validate(createTeamSchema), teamsController.create);
teamsRouter.delete('/:id', validate(paramsIdSchema), teamsController.remove);
