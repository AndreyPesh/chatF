import {
  ChangeEvent,
  MouseEvent,
  useState,
  KeyboardEvent,
  useRef,
} from 'react';
import Actions from './ui/Actions';

const SendMessageField = () => {
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
        console.log('send message :', messageText);
      }
    }
  };

  const onSendMessageHandler = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('send message :', messageText);
    setMessageText('');
  };

  return (
    <div className="bg-white border border-light rounded-[20px] overflow-hidden">
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
          <div className='grow'>
            <Actions />
          </div>
          <button className="w-5 h-5 bg-send bg-no-repeat bg-center transition-all active:scale-90"></button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageField;
