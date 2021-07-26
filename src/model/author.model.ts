import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import { UserDocument } from './user.model';

export interface AuthorDocument extends mongoose.Document {
  user: UserDocument['_id'];
  firstName: string;
  lastName: string;
}

const AuthorSchema = new mongoose.Schema(
  {
    authorId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    firstName: { type: String, default: true },
    lastName: { type: String, default: true },
  },
  { timestamps: true }
);

const Author = mongoose.model<AuthorDocument>('Author', AuthorSchema);

export default Author;
