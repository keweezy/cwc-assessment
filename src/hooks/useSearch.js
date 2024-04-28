const { useState } = require("react");

const useSearch = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return { value, handleChange };
};

export default useSearch;
