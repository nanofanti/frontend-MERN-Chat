import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";

export default function Messages() {
  const { loading, messages } = useGetMessages();
  console.log(messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      {loading && <span className="loading loading-spinner"></span>}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}
