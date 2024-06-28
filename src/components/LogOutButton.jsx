import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

export default function LogOutButton() {
  const { logout } = useLogout();
  return (
    <div className="mt-auto">
      <BiLogOut
        className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
}
