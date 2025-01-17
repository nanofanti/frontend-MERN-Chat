import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useConversation from "../zustand/useConversation";
import { extractTime } from "../utils/extractTime";

export default function Message({ message }) {
  const { authUser } = useContext(AuthContext);
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);

  const fromMe = message.senderId === authUser.data._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.data.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-green-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img src={profilePic} alt="" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer text-xs text-white opacity-50 flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
}
