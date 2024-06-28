import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    //To get the glass effect https://tailwindcss-glassmorphism.vercel.app/
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Log In <span className="text-green-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2" htmlFor="username">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              id="username"
            />
          </div>
          <div>
            <label className="label p-2" htmlFor="password">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              id="password"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-green-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
