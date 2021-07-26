import mongoose from 'mongoose';
import config from 'config';
import log from '../logger';
import { name, random, lorem } from 'faker';
import Book from '../model/book.model';

/** create array of fake books then seed database */
const seedBooks = async () => {
  try {
    /** check if already populated */
    const booksCollection = await Book.find();
    if (booksCollection.length > 1) {
      return;
    }
    /** quantity to be generated */
    const quantity = 10;
    /** empty array to store new data */
    let books = [];
    for (let i = 0; i < quantity; i++) {
      books.push(
        new Book({
          title: name.title(),
          description: lorem.paragraph(),
          publisher: name.firstName(),
          publicationYear: random.number(1234),
          author: Math.random(),
          ISBN: Math.random(),
        })
      );
    }
    /** little housekeeping before adding new books */
    await Book.remove();
    /** create new database entry for every book in the array */
    books.forEach(book => {
      Book.create(book);
    });
  } catch (error) {
    console.log(error);
  }
};

// the database connection
function connect() {
  const dbUri = config.get('dbUri') as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info('Database connected');
      seedBooks();
      log.info('Books Collection has been Populated!');
    })

    .catch(error => {
      log.error('db error', error);
      process.exit(1);
    });
}

export default connect;
