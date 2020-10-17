import React from "react";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const options = [
  { label: "red color", value: "red" },
  { label: "green color", value: "green" },
  { label: "blue color", value: "blue" }
];

export default () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
};
