import { getAuth, signOut } from "firebase/auth";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
const NavBar = () => {
  const [user] = useUser();
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(getAuth());
    alert("Signed out successfully!!");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    // <div className="flex flex-row">
    <nav className="flex">
      <ul className="flex justify-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            to="/articles"
          >
            Articles
          </Link>
        </li>
      </ul>
      <div>
        <button className="items-end" onClick={user ? logOut : login}>
          <BiLogOut className="inline-block" /> {user ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
