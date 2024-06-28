import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <LogIn />
      <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
