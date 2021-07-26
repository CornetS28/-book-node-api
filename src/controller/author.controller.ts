import type { Request, Response } from 'express';
import { get } from 'lodash';
import { createAuthor, findAuthor, findAndUpdate, deleteAuthor, findAllAuthors } from '../service/author.service';

export async function createAuthorHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const body = req.body;

  const author = await createAuthor({ ...body, user: userId });

  return res.send(author);
}

export async function updateAuthorHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const authorId = get(req, 'params.authorId');
  const update = req.body;

  const author = await findAuthor({ authorId });

  if (!author) {
    return res.sendStatus(404);
  }

  if (String(author.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedAuthor = await findAndUpdate({ authorId }, update, { new: true });

  return res.send(updatedAuthor);
}

export async function getAuthorsHandler(req: Request, res: Response) {
  const authors = await findAllAuthors().sort({ title: 'asc' });
  if (!authors) {
    return res.sendStatus(404);
  }
  return res.send(authors);
}

export async function getAuthorHandler(req: Request, res: Response) {
  const authorId = get(req, 'params.authorId');
  const author = await findAuthor({ authorId });

  if (!author) {
    return res.sendStatus(404);
  }

  return res.send(author);
}

export async function deleteAuthorHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const authorId = get(req, 'params.authorId');

  const author = await findAuthor({ authorId });

  if (!author) {
    return res.sendStatus(404);
  }

  if (String(author.user) !== String(userId)) {
    return res.sendStatus(401);
  }

  await deleteAuthor({ authorId });

  return res.sendStatus(200);
}
