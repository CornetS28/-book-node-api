import type { Express, Request, Response } from 'express';
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
import {
  createAuthorHandler,
  updateAuthorHandler,
  getAuthorHandler,
  deleteAuthorHandler,
  getAuthorsHandler,
} from './controller/author.controller';

import { createAuthorSchema, updateAuthorSchema, deleteAuthorSchema } from './schema/author.schema';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

  // Create a author
  app.post('/api/authors', [requiresUser, validateRequest(createAuthorSchema)], createAuthorHandler);

  // Update a author
  app.put('/api/authors/:authorId', [requiresUser, validateRequest(updateAuthorSchema)], updateAuthorHandler);

  // Get all authors
  app.get('/api/authors', getAuthorsHandler);

  // Get a author
  app.get('/api/authors/:authorId', getAuthorHandler);

  // Delete a author
  app.delete('/api/authors/:authorId', [requiresUser, validateRequest(deleteAuthorSchema)], deleteAuthorHandler);
}
