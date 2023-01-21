import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const createAccount = async () => {
    if (password && confirmPassword && password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(getAuth(), username, password);
        navigate("/articles");
      } catch (e) {
        setError(e.message);
      }
    } else {
      setError("Password and confirm password do not match");
    }
  };
  return (
    <div className="flex flex-col items-center h-full mt-32">
      <div className="flex flex-col w-fit p-1">
        {error && <h2 className="text-red-500 text-lg">{error}</h2>}
        <h1 className="font-bold text-4xl text-center mb-5"> Create Account</h1>
        <input
          type="email"
          required
          value={username}
          placeholder="Email"
          className="border-2 rounded-md p-1 m-1"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          required
          value={password}
          placeholder="Password"
          className="border-2 rounded-md p-1 m-1"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Confirm Password"
          value={confirmPassword}
          className="border-2 rounded-md p-1 m-1"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button
          className="border-2 bg-sky-400 w-fit ml-24 rounded-md p-2"
          onClick={createAccount}
        >
          <BiLogIn className="inline-block" /> Create
        </button>
        <Link to="/login" className="text-blue-600 underline">
          You have account? Login here
        </Link>
      </div>
    </div>
  );
};
export default CreateAccount;
