import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  console.log(authUser);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
