import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { validateRequest } from './middleware';
import { createUserSchema } from './schema/user.schema';
export default function (app: Express) {
  app.get('/route-health-check', (req: Request, res: Response) => res.sendStatus(200));

  // User Registration
  app.post('/api/users', validateRequest(createUserSchema), createUserHandler);
}
