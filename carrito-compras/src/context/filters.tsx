import { ReactNode, createContext, useState } from "react";
import type { Category } from "../types";

interface FiltersContextType {
  category: Category; // o el tipo correcto para la propiedad category
  handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void; // el tipo correcto para la función handleCategory
}

interface FiltersProviderProps {
  children: ReactNode; // Tipo para children
}

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

export const FiltersProvider: React.FC<FiltersProviderProps> = ({
  children,
}) => {
  const [category, setCategory] = useState<Category>({
    electronics: false,
    jewelery: false,
    mens_clothing: false,
    womens_clothing: false,
  });

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;
    setCategory((prevCategory) => {
      return { ...prevCategory, [name]: checked };
    });
  };
  return (
    <FiltersContext.Provider value={{ category, handleCategory }}>
      {children}
    </FiltersContext.Provider>
  );
};
