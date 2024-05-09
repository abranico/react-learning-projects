import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/slices/auth";

const Navbar = () => {
  const login = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (login) dispatch(logout());
  };

  return (
    <header>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-16 bg-gray-800 shadow sm:items-baseline w-full">
        <NavLink
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-600"
        >
          👷‍♂️Gestor de Usuarios
        </NavLink>
        <ul className="flex gap-6 justify-center">
          <li className="text-lg no-underline text-grey-darkest hover:text-blue-600 ml-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-lg no-underline text-grey-darkest hover:text-blue-600 ml-2">
            <NavLink
              onClick={handleLogout}
              to="/login"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              {login ? "Logout" : "Login"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
