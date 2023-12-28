"use client";
import { useState } from "react";
import HostBookingPaymentTab from "./tabs/HostBookingPaymentTab";
import GuestRefundPaymentTab from "./tabs/GuestRefundPaymentTab";
import CancelledBookingRefundTab from "./tabs/CancelledBookingRefundTab";
import FilterDropdown from "./components/FilterDropdown";
import Button from "@/components/buttons/button";

const PaymentPageContent = () => {
  const [activeTab, setActiveTab] = useState("hostBookingPayment");

  const showTab = (value: string) => {
    switch (value) {
      case "hostBookingPayment":
        return <HostBookingPaymentTab />;
      case "guestsRefund":
        return <GuestRefundPaymentTab />;
      case "cancelledBookingsRefund":
        return <CancelledBookingRefundTab />;
      default:
        return <HostBookingPaymentTab />;
    }
  };

  return (
    <section className="w-full flex flex-col gap-5">
      <section className="flex items-center w-full overflow-x-scroll hide-scroll md:justify-center ">
        {bookingTab.map((item, i) => (
          <button
            type="button"
            onClick={() => setActiveTab(item.value)}
            className={`whitespace-nowrap capitalize px-[2rem] pb-3 font-[500] text-[1rem] border-b ${
              activeTab === item.value
                ? "text-orange border-b-orange "
                : " text-gray-three border-b-[#444854] "
            } `}
            key={`tab-${i + 1}`}
          >
            {item.label}
          </button>
        ))}
      </section>
      <div className="mb-2 flex items-center gap-4 justify-between">
        <FilterDropdown intialValue="All Bookings" />
        <div className="w-full flex items-center gap-4">
          <FilterDropdown intialValue="Month" />
          <FilterDropdown intialValue="Year" />
        </div>
        <Button className="w-full !py-4 !rounded-2xl" text="Filter" />
      </div>
      {showTab(activeTab)}
    </section>
  );
};

export default PaymentPageContent;
const bookingTab = [
  { label: "Host Booking Payment", value: "hostBookingPayment" },
  { label: "Guests Refundable Caution Payment", value: "guestsRefund" },
  { label: "Cancelled Bookings Refund", value: "cancelledBookingsRefund" },
];

const dropDown = [
  { initialValue: "All Bookings", dropDown: [] },
  { initialValue: "Month", dropDown: [] },
  { initialValue: "Year", dropDown: [] },
];
