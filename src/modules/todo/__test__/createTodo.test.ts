import { describe, it, vi, expect } from 'vitest';
import { createServer } from '../../../utils/createServer';
import * as todoService from '../todo.service';

describe('Post "/api/todos" route', () => {
  it('should call the createTodo service', async () => {
    const todo = {
      _id: 'mockId',
      title: 'Test todo',
      shortId: 'mockShortId',
      complete: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const createTodoSpy = vi.spyOn(todoService, 'createTodo');

    expect(createTodoSpy.getMockName()).toEqual('createTodo');

    createTodoSpy.mockResolvedValue(todo);

    const server = await createServer();

    await server.ready();

    const payload = {
      title: 'Test todo',
    };

    const response = await server.inject({
      method: 'POST',
      url: '/api/todos',
      payload,
    });

    expect(response.json()).toEqual(todo);
    expect(createTodoSpy).toHaveBeenCalledWith(payload);
    expect(response.statusCode).toBe(201);
  });
});
