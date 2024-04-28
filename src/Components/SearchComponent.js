import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

const SearchInput = ({
  backgroundColor,
  borderRadius,
  placeholder,
  onChange,
  value,
  inputClasses = "p-5",
}) => {
  return (
    <div className="relative w-full">
      <Icon
        path={mdiMagnify}
        size={1}
        className="absolute top-[30%] left-[10px] text-search-input"
      />
      <input
        className={`w-full text-input-text placeholder-search-input ${backgroundColor} ${borderRadius} ${inputClasses} pl-[40px] focus:outline-none`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
