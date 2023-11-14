import { Socket, io } from 'socket.io-client';
import { ChatLayout } from '../testComponents/ChatLayout';
import { Header } from '../testComponents/Header';
import { MessageForm } from '../testComponents/MessageForm';
import { Messages } from '../testComponents/Messages';
import {
  ClientToServerEvents,
  Message,
  ServerToClientEvents,
  User,
} from '../testComponents/interfaces/chat.interface';
import { useEffect, useState } from 'react';
import { LoginLayout } from '../testComponents/LoginLayout';
import { LoginForm } from '../testComponents/LoginForm';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

const ContactsPage = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User>({
    userId: '',
    userName: '',
  });

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem('user') ?? `{}`);
    // If userId exists, we know there is a "logged in" user.
    if (currentUser.userId) {
      // So we set the current user into state.
      setUser(currentUser);
    }
    socket.on('connect', () => {
      // Set connect state accordingly.
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      // Set connect state accordingly.
      setIsConnected(false);
    });
    socket.on('chat', (e) => {
      // Set connect state accordingly.
      setMessages((messages) => [e, ...messages]);
    });
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    // There must be a user set in state to send a message.
    if (user) {
      // Given a user is "logged in", emit a 'chat' message to the server
      // with the current user's information, the time of the message (timeSent),
      // and the value of the user input in the message form.
      socket.emit('chat', {
        user: {
          userId: user.userId,
          userName: user.userName,
        },
        timeSent: new Date(Date.now()).toLocaleString('en-US'),
        //@ts-ignore
        message: e.target[0].value,
      })
    }
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    //@ts-ignore
    const formValue = e.target[0].value;
    const newUser = {
      userId: Date.now().toLocaleString().concat(formValue),
      userName: formValue,
    };
    sessionStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <>
      {user && user.userId ? (
        <ChatLayout>
          <div>Contacts</div>
          <Header user={user} isConnected={isConnected}></Header>
          <Messages user={user} messages={messages}></Messages>
          <MessageForm sendMessage={sendMessage}></MessageForm>
        </ChatLayout>
      ) : (
        <LoginLayout>
          <LoginForm login={login}></LoginForm>
        </LoginLayout>
      )}
    </>
  );
};

export default ContactsPage;
