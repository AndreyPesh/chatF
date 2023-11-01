import ClientCaption from '../../4_features/client/ClientCaption';
import Discussion from '../../4_features/discussion/Discussion';

const Conversation = () => {
  return (
    <div className="relative w-full max-h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-light">
      <ClientCaption />
      <Discussion />
    </div>
  );
};

export default Conversation;
