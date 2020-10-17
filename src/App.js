import React, { useState } from "react";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const options = [
  { label: "red color", value: "red" },
  { label: "green color", value: "green" },
  { label: "blue color", value: "blue" }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
