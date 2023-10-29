import PreviewChat from './ui/PreviewChat';

const fakeArrayChat = Array(5).fill('');

const ListChat = () => {
  return (
    <div className="max-w-[370px]">
      {fakeArrayChat.map((_, index) => (
        <PreviewChat key={index} isActive={Math.random() > 0.5} />
      ))}
    </div>
  );
};

export default ListChat;
