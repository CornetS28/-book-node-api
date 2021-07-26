import { object, string, number, array, ref } from 'yup';

const payload = {
  body: object({
    title: string().required('Title is required').min(8, 'Title is too short - should be 8 chars minimum.'),
    description: string()
      .required('Description is required')
      .min(120, 'Description is too short - should be 120 chars minimum.'),
    publisher: string().required('Publisher is required').min(3, 'Publisher is too short - should be 3 chars minimum.'),
    publicationYear: number().required('Publication year is required'),
    authors: array(),
    ISBN: string().required('ISBN is required').min(13, 'ISBN should be 13 chars minimum.'),
  }),
};

const params = {
  params: object({
    bookId: string().required('bookId is required'),
  }),
};

export const createBookSchema = object({
  ...payload,
});

export const updateBookSchema = object({
  ...params,
  ...payload,
});

export const deleteBookSchema = object({
  ...params,
});
