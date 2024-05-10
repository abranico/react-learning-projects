import { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import User from "./components/User.tsx/User";

const Dashboard = () => {
  const { isLoading, users, error, handleGetUsers } = useUsers();
  useEffect(() => {
    document.title = "Gestor de Usuarios | Dashboard";
  }, []);
  return (
    <section className="max-w-4xl mx-auto p-14">
      <header className="flex items-center">
        <button
          onClick={handleGetUsers}
          className="bg-sky-600 px-4 py-2 rounded-md"
        >
          Traer Usuarios
        </button>

        <p className="ml-auto text-sky-500 font-bold">
          Usuarios: <strong> {users.length} </strong>
        </p>
      </header>
      <div className="relative overflow-x-auto mt-6 ">
        {isLoading && <p className="text-center mb-8">Cargando...</p>}
        {error && (
          <p className="text-center mb-8 text-red-400">
            Error al traer los usuarios.
          </p>
        )}

        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Foto
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellido
              </th>
              <th scope="col" className="px-6 py-3">
                País
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user.login.uuid}
                id={user.login.uuid}
                image={user.picture.thumbnail}
                firstName={user.name.first}
                lastName={user.name.last}
                country={user.location.country}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Dashboard;
