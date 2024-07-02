import { useState } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useSignup() {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useContext(AuthContext);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(
        "https://backend-mern-chat-hqzv.onrender.com/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
          }),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //LOCAL STORAGE
      localStorage.setItem("chat-user", JSON.stringify(data));

      //CONTEXT
      setAuthUser(data);

      toast.success("Signed up successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
}

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
