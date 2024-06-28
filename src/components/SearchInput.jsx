import { IoIosSearch } from "react-icons/io";

export default function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
        />
        <button
          type="submit"
          className="btn btn-circle bg-green-500 text-white"
        >
          <IoIosSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}
