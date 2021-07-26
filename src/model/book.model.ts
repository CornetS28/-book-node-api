import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import { UserDocument } from './user.model';

export interface BookDocument extends mongoose.Document {
  user: UserDocument['_id'];
  title: string;
  description: string;
  publisher: string;
  publicationYear: number;
  authors: string[];
  ISBN: string;
  createdAt: Date;
  updatedAt: Date;
}

const BookSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, default: true },
    description: { type: String, default: true },
    publisher: { type: String, default: true },
    publicationYear: { type: Number, default: true },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    ISBN: { type: String, default: true, unique: true },
  },
  { timestamps: true }
);

const Book = mongoose.model<BookDocument>('Book', BookSchema);

export default Book;
