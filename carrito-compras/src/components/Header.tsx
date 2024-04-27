import Filter from "./Filter";

const Header = () => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <strong>Carrito de Compras</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Filter />
          </li>
        </ul>
        <ul>
          <li>
            <button>Carrito</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
