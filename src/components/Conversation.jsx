import useConversation from "../zustand/useConversation";
import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

export default function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useContext(SocketContext);

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  console.log("ONLINE USERS", onlineUsers);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-green-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}
