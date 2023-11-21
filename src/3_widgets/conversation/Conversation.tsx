import { useEffect, useRef } from 'react';
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
      className="w-full max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light"
    >
      <ClientCaption />
      <Discussion />
    </div>
  );
};

export default Conversation;
