import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { validateRequest, requiresUser } from './middleware';
import {
  createUserSessionHandler,
  invalidateUserSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller';
import { createUserSchema, createUserSessionSchema } from './schema/user.schema';
import {
  createBookHandler,
  updateBookHandler,
  getBookHandler,
  deleteBookHandler,
  getBooksHandler,
} from './controller/book.controller';
import { createBookSchema, updateBookSchema, deleteBookSchema } from './schema/book.schema';

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

  // Create a book
  app.post('/api/books', [requiresUser, validateRequest(createBookSchema)], createBookHandler);

  // Update a book
  app.put('/api/books/:bookId', [requiresUser, validateRequest(updateBookSchema)], updateBookHandler);

  // Get all books
  app.get('/api/books', getBooksHandler);

  // Get a book
  app.get('/api/books/:bookId', getBookHandler);

  // Delete a book
  app.delete('/api/books/:bookId', [requiresUser, validateRequest(deleteBookSchema)], deleteBookHandler);
}
