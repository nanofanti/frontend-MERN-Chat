import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

export default function Conversations() {
  //Custom Hook calling
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col py-2 overflow-auto">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            // To not show divider for the last conversation
            lastIdx={idx === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
}
