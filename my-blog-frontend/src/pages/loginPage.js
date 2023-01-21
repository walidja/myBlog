import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), username, password);
      navigate("/articles");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div className="flex flex-col items-center h-full mt-32">
      <div className="flex flex-col w-fit p-1">
        {error && <h2 className="text-red-500 text-lg">{error}</h2>}
        <h1 className="font-bold text-2xl text-center"> Sign In</h1>
        <label className="m-1 pr-1">
          Username:
          <input
            type="text"
            value={username}
            className="border-2 rounded-md p-1 ml-1"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label className="m-1">
          Password:
          <input
            type="password"
            value={password}
            className="border-2 rounded-md p-1 ml-2"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button
          className="border-2 bg-sky-400 w-fit ml-28 rounded-md p-2"
          onClick={login}
        >
          <BiLogIn className="inline-block" /> Login
        </button>
        <Link to="/createAccount" className="text-blue-600 underline">
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
