import BoldArrowBottomIcon from "@/icons/bold-arrow-bottom.icon";
import React from "react";

interface Props {
  intialValue: string;
}
const FilterDropdown = ({ intialValue }: Props) => {
  return (
    <button
      className="w-full md:max-w-60 p-4 bg-gray-ten rounded-2xl text-base text-gray-five font-normal flex items-center justify-between"
      type="button"
    >
      <span>{intialValue}</span>
      <BoldArrowBottomIcon />
    </button>
  );
};

export default FilterDropdown;
