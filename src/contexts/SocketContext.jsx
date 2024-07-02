import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = (props) => {
  const { authUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io("https://backend-mern-chat-hqzv.onrender.com", {
        query: { userId: authUser._id },
        withCredentials: true,
      });

      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
        console.log("Socket reset due to no authUser");
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {props.children}
    </SocketContext.Provider>
  );
};
