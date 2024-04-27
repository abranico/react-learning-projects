import { useContext } from "react";
import { FiltersContext } from "../context/filters";

const Filter = () => {
  const { category, handleCategory } = useContext(FiltersContext)!;
  return (
    <details className="dropdown">
      <summary>Selecciona una categoria</summary>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              name="electronics"
              checked={category.electronics}
              onChange={handleCategory}
            />
            Electronics
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="jewelery"
              checked={category.jewelery}
              onChange={handleCategory}
            />
            Jeweley
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="mens_clothing"
              checked={category.mens_clothing}
              onChange={handleCategory}
            />
            Men's Clothing
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="womens_clothing"
              checked={category.womens_clothing}
              onChange={handleCategory}
            />
            Women's Clothing
          </label>
        </li>
      </ul>
    </details>
  );
};

export default Filter;
