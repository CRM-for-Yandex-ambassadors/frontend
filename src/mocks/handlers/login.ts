import { http, HttpResponse } from 'msw';

export const loginHandlers = [
  http.get('/authorize/users/me', () => {
    return new Promise((resolve) => {
      const user = {
        email: 'test@mail.com',
        id: 3,
        username: 'test',
      };
      const response = HttpResponse.json(user, {
        status: 202,
        statusText: 'Authorized successfully',
      });

      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  }),
  http.post('authorize/jwt/create', () => {
    return new Promise((resolve) => {
      const token = {
        refresh: '123456',
        access: '654321test',
      };
      const response = HttpResponse.json(token, {
        status: 202,
        statusText: 'Get token',
      });

      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  }),
];
