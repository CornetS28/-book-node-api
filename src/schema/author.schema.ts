import { object, string } from 'yup';

const payload = {
  body: object({
    firstName: string().required('firstName is required'),
    lastName: string().required('lastName is required'),
  }),
};

const params = {
  params: object({
    authorId: string().required('authorId is required'),
  }),
};

export const createAuthorSchema = object({
  ...payload,
});

export const updateAuthorSchema = object({
  ...params,
  ...payload,
});

export const deleteAuthorSchema = object({
  ...params,
});
