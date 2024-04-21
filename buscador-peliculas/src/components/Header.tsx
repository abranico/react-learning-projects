const Header = () => {
  return (
    <header>
      <h1>Buscador de películas</h1>

      <form>
        <input
          type="text"
          className="search__title"
          placeholder="Avengers, Star Wars, The Matrix..."
        />
        <button type="submit" className="search__submit">
          Buscar
        </button>
      </form>
    </header>
  );
};

export default Header;
