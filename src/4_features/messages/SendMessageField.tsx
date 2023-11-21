import {
  ChangeEvent,
  MouseEvent,
  useState,
  KeyboardEvent,
  useRef,
} from 'react';
import Actions from './ui/Actions';
import useRoomStore from '../../6_shared/hooks/store/useActiveRoomStore';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/types/events.enum';
import useUserStore from '../../6_shared/hooks/store/useUserStore';

const SendMessageField = () => {
  const { user } = useUserStore();
  const { socket } = useChatSocketCtx();
  const { activeRoom } = useRoomStore();
  const [messageText, setMessageText] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const participant = activeRoom.users.find(
    (memberChat) => memberChat.id !== user.id
  );

  const onMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const message = event.target.value;
    setMessageText(message);
  };

  const onKeydownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === 'Enter') {
      if (textAreaRef.current) {
        textAreaRef.current.blur();
        setMessageText('');
      }
      sendMessageToServer();
    }
  };

  const onSendMessageHandler = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageText('');
    sendMessageToServer();
  };

  const readMessage = () => {
    socket.emit(CHAT_EVENTS.READ_MESSAGE_EMIT, {
      roomName: activeRoom.roomName,
      roomId: activeRoom.id,
      authorId: participant?.id,
    });
  };

  const sendMessageToServer = () => {
    socket.emit(CHAT_EVENTS.CHAT, {
      authorId: user.id,
      message: messageText,
      roomName: activeRoom.roomName,
      roomId: activeRoom.id,
    });
  };

  return (
    <div className="sticky bottom-2 w-full bg-white border border-light rounded-[20px] overflow-hidden">
      <form onSubmit={onSendMessageHandler}>
        <div className="max-h-[96px]">
          <textarea
            ref={textAreaRef}
            name="message"
            className="p-5 inline-flex w-full min-h-[96px] resize-none caret-nephritis border-b-2 border-b-grayish focus:outline-none"
            onChange={onMessageHandler}
            onKeyDown={onKeydownHandler}
            onFocus={readMessage}
            value={messageText}
          ></textarea>
        </div>
        <div className="py-3 px-5 flex justify-between">
          <div className="grow">
            <Actions />
          </div>
          <button className="w-5 h-5 bg-send bg-no-repeat bg-center transition-all active:scale-90"></button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageField;
