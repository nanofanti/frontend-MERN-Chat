import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://backend-mern-chat-ay5a.onrender.com/user/users",
          {
            method: "GET",
            credentials: "include", // Include credentials to send cookies
          }
        );
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
}
