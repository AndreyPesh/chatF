import { ReactNode, useRef } from 'react';
import { ChatSocketCtx } from './socketContext';
import { io } from 'socket.io-client';

const URL = 'http://localhost:5000';

const ChatSocketCtxProvider = (props: { children?: ReactNode }) => {
  const socketRef = useRef(io(URL, { autoConnect: false }));

  return (
    <ChatSocketCtx.Provider value={{ socket: socketRef.current }}>
      {props.children}
    </ChatSocketCtx.Provider>
  );
};

export default ChatSocketCtxProvider;
