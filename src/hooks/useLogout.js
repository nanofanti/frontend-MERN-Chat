import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthContext);

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://backend-mern-chat-ay5a.onrender.com/user/logout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}
