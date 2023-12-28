import Image from "next/image";

const GuestListingCard = () => {
  return (
    <div className="w-full flex items-center bg-[#F9FAFC] gap-[1.125rem] rounded-[1rem] p-[1rem] ">
      <div className="relative h-[5rem] w-[5rem] shrink-0">
        <Image
          src="/listings/booked-house.png"
          alt="img"
          fill
          className="rounded-[0.5rem]"
          sizes="100%"
        />
      </div>
      <div className="flex-[1] flex flex-col items-start justify-between h-full">
        <h2 className="text-[1.125rem] text-start font-[700] text-black ">
          Eko Atlantic Stays
        </h2>
        <h3 className="text-primary text-[0.875rem] font-normal">
          Adeyemi Akitoye
        </h3>
        <div className="shrink-0 flex items-end justify-between flex-wrap w-full gap-[0.5rem]">
          <h4 className="text-[0.75rem] text-gray-five shrink-0 ">
            11 Nov - 13 Nov
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GuestListingCard;
