import BoldArrowBottomIcon from "@/icons/bold-arrow-bottom.icon";
import React from "react";

interface Props {
  intialValue: string;
}
const FilterDropdown = ({ intialValue }: Props) => {
  return (
    <button
      className="w-full max-w-[15rem] p-4 bg-gray-ten rounded-2xl text-[1rem] text-gray-five font-normal flex items-center justify-between  "
      type="button"
    >
      <span>{intialValue}</span>
      <BoldArrowBottomIcon />
    </button>
  );
};

export default FilterDropdown;
