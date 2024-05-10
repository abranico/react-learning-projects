import { useAppDispatch, useAppSelector } from "./useStore";
import { fetchUsers, removeUser } from "../store/slices/users";
import { Login } from "../types";
const useUsers = () => {
  const { isLoading, data, error } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  const handleGetUsers = () => {
    dispatch(fetchUsers());
  };

  const handleRemoveUser = (id: Login["uuid"]) => {
    dispatch(removeUser({ id }));
  };

  return {
    isLoading,
    users: data,
    error,
    handleRemoveUser,
    handleGetUsers,
  };
};

export default useUsers;
