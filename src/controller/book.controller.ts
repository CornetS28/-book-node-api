import type { Request, Response } from 'express';
import { get } from 'lodash';
import { createBook, findBook, findAndUpdate, deleteBook, findAllBooks } from '../service/book.service';

export async function createBookHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const body = req.body;

  const book = await createBook({ ...body, user: userId });

  return res.send(book);
}

export async function updateBookHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const bookId = get(req, 'params.bookId');
  const update = req.body;

  const book = await findBook({ bookId });

  if (!book) {
    return res.sendStatus(404);
  }

  if (String(book.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedBook = await findAndUpdate({ bookId }, update, { new: true });

  return res.send(updatedBook);
}

export async function getBooksHandler(req: Request, res: Response) {
  const books = await findAllBooks().sort({ title: 'asc' });
  console.log(books);
  if (!books) {
    return res.sendStatus(404);
  }
  return res.send(books);
}

export async function getBookHandler(req: Request, res: Response) {
  const bookId = get(req, 'params.bookId');
  const book = await findBook({ bookId });

  if (!book) {
    return res.sendStatus(404);
  }

  return res.send(book);
}

export async function deleteBookHandler(req: Request, res: Response) {
  const userId = get(req, 'user._id');
  const bookId = get(req, 'params.bookId');

  const book = await findBook({ bookId });

  if (!book) {
    return res.sendStatus(404);
  }

  if (String(book.user) !== String(userId)) {
    return res.sendStatus(401);
  }

  await deleteBook({ bookId });

  return res.sendStatus(200);
}
