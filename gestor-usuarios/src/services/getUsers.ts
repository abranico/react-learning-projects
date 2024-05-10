const getUsers = () => {
  return fetch("https://randomuser.me/api/?results=10")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((data) => data.results)
    .catch(() => {
      throw new Error("Error al traer los usuarios");
    });
};

export default getUsers;
