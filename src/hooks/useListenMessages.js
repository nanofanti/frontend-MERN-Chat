import { useContext, useEffect } from "react";
import { SocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation";
import notification from "../assets/sounds/notification.mp3";

export default function useListenMessages() {
  const { socket, onlineUsers } = useContext(SocketContext);
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
}
