import { setupWorker } from 'msw/browser';
import { http, HttpResponse } from 'msw';

export const worker = setupWorker(
  http.get('*', () => {
    return new Promise((resolve) => {
      const response = HttpResponse.json(
        {
          message: 'Mocked response',
        },
        {
          status: 202,
          statusText: 'Mocked status',
        }
      );

      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  })
);
