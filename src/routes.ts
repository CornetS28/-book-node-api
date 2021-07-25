import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { validateRequest, requiresUser } from './middleware';
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller';
import { createUserSchema, createUserSessionSchema } from './schema/user.schema';
export default function (app: Express) {
  app.get('/route-health-check', (req: Request, res: Response) => res.sendStatus(200));

  // User registration
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);

  // User login
  app.post('/api/sessions', validateRequest(createUserSessionSchema), createUserSessionHandler);

  // Get the user's sessions
  app.get('/api/sessions', requiresUser, getUserSessionsHandler);

  // Logout
  app.delete('/api/sessions', requiresUser, invalidateUserSessionHandler);
}
