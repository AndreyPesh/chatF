import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './1_app/App';
import { Provider } from 'react-redux';
import { store } from './1_app/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
