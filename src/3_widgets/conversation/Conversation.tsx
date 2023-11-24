import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import ClientCaption from '../../4_features/client/ClientCaption';
import Discussion from '../../4_features/discussion/Discussion';
import useActiveRoomStore from '../../6_shared/hooks/store/useActiveRoomStore';

const Conversation = () => {
  const discussionDivRef = useRef<HTMLDivElement>(null);
  const { activeRoom } = useActiveRoomStore();

  const scrollToBottom = () => {
    if (discussionDivRef.current) {
      discussionDivRef.current.scrollTop =
        discussionDivRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeRoom.id, activeRoom.messages.length]);

  return (
    <div
      ref={discussionDivRef}
      className={classNames(
        'absolute top-0 sm:relative w-full max-h-[100vh] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light transition-all delay-75',
        { 'right-[-100%]': !activeRoom.id },
        { 'right-0': activeRoom.id }
      )}
    >
      <ClientCaption />
      <Discussion />
    </div>
  );
};

export default Conversation;
