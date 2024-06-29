import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

export default function Conversations() {
  //Custom Hook calling
  const { loading, conversations } = useGetConversations();

  console.log("CONVERSATION", conversations);

  return (
    <div className="flex flex-col py-2 overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
}
