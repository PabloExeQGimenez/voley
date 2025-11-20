import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { ENV } from './utils/env.js';
import { errorHandler } from './middlewares/error.js';
import { healtRouter } from './routes/health.js';
import { teamsRouter } from './routes/teams.js';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 60_000, max: 100 }));

app.use('/healt', healtRouter);
app.use('/teams', teamsRouter);

app.use(errorHandler);
