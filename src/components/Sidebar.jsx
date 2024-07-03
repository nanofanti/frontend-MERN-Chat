import Conversations from "./Conversations";
import LogOutButton from "./LogOutButton";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Sidebar() {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <h1 className="text-white text-center p-4">
        Hi {authUser.data.username} !
      </h1>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogOutButton />
    </div>
  );
}
