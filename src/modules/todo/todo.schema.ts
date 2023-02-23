import { Static, Type } from '@sinclair/typebox';

const todo = Type.Object({
  _id: Type.String(),
  title: Type.String(),
  shortId: Type.String(),
  complete: Type.Boolean(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export const createTodoSchema = {
  tags: ['todo'],
  description: 'Create a todo resource',
  body: Type.Object({
    title: Type.String({
      default: 'Default Todo title',
    }),
  }),
  response: {
    201: todo,
  },
};

export type CreateTodoBody = Static<typeof createTodoSchema.body>;
