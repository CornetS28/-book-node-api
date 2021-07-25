import { DocumentDefinition, FilterQuery } from 'mongoose';
import { omit } from 'lodash';
import User, { UserDocument } from '../model/user.model';

// create a user
export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error);
  }
}
