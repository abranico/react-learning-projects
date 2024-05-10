import { type Auth, logout, login } from "../store/slices/auth";
import { useAppDispatch, useAppSelector } from "./useStore";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const handleLogin = ({ username, password }: Auth) => {
    dispatch(login({ username, password }));
  };

  const handleLogout = () => {
    if (auth) dispatch(logout());
  };

  return { auth, handleLogin, handleLogout };
};

export default useAuth;
