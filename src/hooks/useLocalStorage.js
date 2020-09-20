import { useState, useEffect } from "react";

const PREFIX = "editor-codepen-clone-";

const useLocalStorage = (key, initialValue) => {
  const preFixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(preFixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof jsonValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(preFixedKey, JSON.stringify(value));
  }, [preFixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
