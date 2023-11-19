import {
  ChangeEvent,
  MouseEvent,
  useState,
  KeyboardEvent,
  useRef,
} from 'react';
import Actions from './ui/Actions';
import useRoomStore from '../../6_shared/hooks/store/useRoomStore';
import { useChatSocketCtx } from '../../6_shared/socket/socketContext';
import { CHAT_EVENTS } from '../../6_shared/socket/events.enum';

// export interface Message {
//   unit: Unit;
//   timeSent: string;
//   message: string;
//   roomName: string;
// }

// interface Message {
//   message: string;
//   roomName: string;
// }

const SendMessageField = () => {
  const { socket } = useChatSocketCtx();
  const { room } = useRoomStore();
  const [messageText, setMessageText] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
    }
  };

  const onSendMessageHandler = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageText('');
    sendMessageToServer();
  };

  const sendMessageToServer = () => {
    socket.emit(CHAT_EVENTS.CHAT, {
      roomName: room.activeRoomName,
      message: messageText,
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
