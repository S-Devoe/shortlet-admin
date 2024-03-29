"use client";
import { useSearchParams } from "next/navigation";
import { bookingTab } from "../PaymentPageContent";
import BookingStageSection from "./section/BookingStageSection";

const BookingInfoPage = () => {
  const params = useSearchParams();
  const activeTab = params.get("tabValue");

  return (
    <section className="w-full flex flex-col gap-5">
      <section className="flex items-center w-full overflow-x-scroll hide-scroll md:justify-center ">
        {bookingTab.map((item, i) => (
          <div
            className={`whitespace-nowrap capitalize px-[2rem] pb-3 font-[500] text-[1rem] border-b ${
              activeTab === item.value
                ? "text-orange border-b-orange "
                : " text-gray-three border-b-[#444854] "
            } `}
            key={`tab-${i + 1}`}
          >
            {item.label}
          </div>
        ))}
      </section>
      <BookingStageSection />
    </section>
  );
};

export default BookingInfoPage;
