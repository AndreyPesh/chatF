import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './1_app/App';
import { Provider } from 'react-redux';
import { store } from './1_app/store/store';
import ChatSocketCtxProvider from './6_shared/socket/SocketProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChatSocketCtxProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChatSocketCtxProvider>
  </React.StrictMode>
);
