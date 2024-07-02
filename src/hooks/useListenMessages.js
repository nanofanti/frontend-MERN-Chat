import { useContext, useEffect } from "react";
import { SocketContext } from "../contexts/SocketContext";
import useConversation from "../zustand/useConversation";

export default function useListenMessages() {
  const { socket, onlineUsers } = useContext(SocketContext);
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
}
