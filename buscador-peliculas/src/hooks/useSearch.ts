import { useEffect, useRef, useState } from "react";

const useSearch = () => {
  const [inputError, setInputError] = useState<boolean | string>(false);
  const [inputValue, setInputValue] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = inputValue === "";
      return;
    }
    if (inputValue.trim().length < 3)
      return setInputError("La busqueda debe tener al menos tres caracteres");

    setInputError(false);
  }, [inputValue]);

  return { inputError, inputValue, setInputValue };
};

export default useSearch;
