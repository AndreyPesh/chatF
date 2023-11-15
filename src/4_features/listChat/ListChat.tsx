import PreviewChat from './ui/PreviewChat';
import useUserStore from '../../6_shared/hooks/store/useUserStore';
import useQueryConversation from '../../6_shared/hooks/conversation/useQueryConversation';

const ListChat = () => {
  const { user } = useUserStore();
  // const { conversationList } = useQueryConversation(user.id);

  // console.log(conversationList);

  return (
    <div className="max-w-[390px] pb-[260px] h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      {/* {conversationList &&
        conversationList.map((conversation) => (
          <PreviewChat key={conversation.id} conversation={conversation} />
        ))} */}
        list chats
    </div>
  );
};

export default ListChat;
