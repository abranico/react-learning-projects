import useSearch from "../hooks/useSearch";

interface Props {
  onSearch: (keyword: string) => void;
}

const Header: React.FC<Props> = ({ onSearch }) => {
  const { inputError, inputValue, setInputValue } = useSearch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const title = e.target.value;
    if (title.startsWith(" ")) return;
    setInputValue(title);
  };

  return (
    <header>
      <h1>Buscador de películas</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={inputValue}
          onChange={handleChange}
          className="search__title"
          style={{ borderColor: inputError ? "red" : "" }}
          placeholder="Avengers, Star Wars, The Matrix..."
        />
        <button type="submit" className="search__submit">
          Buscar
        </button>
      </form>
      <span style={{ color: "red", display: "block", textAlign: "center" }}>
        {inputError}
      </span>
    </header>
  );
};

export default Header;
