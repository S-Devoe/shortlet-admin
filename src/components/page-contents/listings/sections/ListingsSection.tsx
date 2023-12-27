"use client";
import { useState } from "react";
import AllListings from "../tabs/AllListings";
import PendingListing from "../tabs/PendingListing";
import DeclinedListing from "../tabs/DeclinedListing";
import ApprovedListing from "../tabs/ApprovedListing";

const ListingsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const showTab = (value: string) => {
    switch (value) {
      case "all":
        return <AllListings />;
      case "pending":
        return <PendingListing />;
      case "declined":
        return <DeclinedListing />;
      case "approved":
        return <ApprovedListing />;
      default:
        return <AllListings />;
    }
  };

  return (
    <section className="w-full flex flex-col gap-[2.5rem]  ">
      <section className="flex items-center w-full overflow-x-scroll hide-scroll md:justify-center ">
        {listingTab.map((item, i) => (
          <button
            type="button"
            onClick={() => setActiveTab(item)}
            className={`capitalize px-[2.5rem] pb-3 font-[500] text-[0.875rem] border-b ${
              activeTab === item
                ? "text-orange border-b-orange "
                : " text-gray-three border-b-[#444854] "
            } `}
            key={`tab-${i + 1}`}
          >
            {item}
          </button>
        ))}
      </section>
      {showTab(activeTab)}
    </section>
  );
};

export default ListingsSection;

const listingTab = ["all", "declined", "approved", "pending"];
