import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

const container = document.getElementById('root')!;
const root = createRoot(container);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
