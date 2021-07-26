import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import Author, { AuthorDocument } from '../model/author.model';

export function createAuthor(input: DocumentDefinition<AuthorDocument>) {
  return Author.create(input);
}

export function findAuthor(query: FilterQuery<AuthorDocument>, options: QueryOptions = { lean: true }) {
  return Author.findOne(query, {}, options);
}

export function findAllAuthors() {
  // query: FilterQuery<AuthorDocument>,
  // options: QueryOptions = { lean: true }
  return Author.find();
}

export function findAndUpdate(
  query: FilterQuery<AuthorDocument>,
  update: UpdateQuery<AuthorDocument>,
  options: QueryOptions
) {
  return Author.findOneAndUpdate(query, update, options);
}

export function deleteAuthor(query: FilterQuery<AuthorDocument>) {
  return Author.deleteOne(query);
}
