import useActiveRoomStore from '../../6_shared/hooks/store/useActiveRoomStore';
import InterlocutorMessage from '../messages/InterlocutorMessage';
import SendMessageField from '../messages/SendMessageField';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import UserMessage from '../messages/UserMessage';

const Discussion = () => {
  const { user } = useUserStore();
  const { activeRoom } = useActiveRoomStore();

  return (
    <div className="flex flex-col w-full min-h-[93%] md:min-h-[90%] p-5 pb-0 bg-light-gray border-box">
      <div className="grow">
        {activeRoom.id &&
          activeRoom.messages.map(
            ({ id, content, authorId, createdAt, isReaded }) => {
              return authorId === user.id ? (
                <UserMessage
                  key={id}
                  userPhotoUrl={'/avatars/Avatar1.png'}
                  message={content}
                  time={createdAt}
                  status={isReaded}
                />
              ) : (
                <InterlocutorMessage
                  key={id}
                  userPhotoUrl={'/avatars/Robert.png'}
                  message={content}
                  time={createdAt}
                />
              );
            }
          )}
      </div>
      {activeRoom.id && <SendMessageField />}
    </div>
  );
};

export default Discussion;
