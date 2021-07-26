import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import Book, { BookDocument } from '../model/book.model';

export function createBook(input: DocumentDefinition<BookDocument>) {
  return Book.create(input);
}

export function findBook(query: FilterQuery<BookDocument>, options: QueryOptions = { lean: true }) {
  return Book.findOne(query, {}, options);
}

export function findAllBooks() {
  // query: FilterQuery<BookDocument>,
  // options: QueryOptions = { lean: true }
  return Book.find();
}

export function findAndUpdate(
  query: FilterQuery<BookDocument>,
  update: UpdateQuery<BookDocument>,
  options: QueryOptions
) {
  return Book.findOneAndUpdate(query, update, options);
}

export function deleteBook(query: FilterQuery<BookDocument>) {
  return Book.deleteOne(query);
}
