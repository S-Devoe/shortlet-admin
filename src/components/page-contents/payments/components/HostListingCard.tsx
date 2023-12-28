import Image from "next/image";

interface Props {
  showDate?: boolean;
}
const HostListingCard = ({ showDate }: Props) => {
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
          Lagos, Nigeria
        </h3>
        {showDate ? (
          <h4 className="text-[0.75rem] text-gray-five shrink-0 ">
            10 Nov, 2023 - 25 Nov, 2023
          </h4>
        ) : (
          <h4 className="text-[0.75rem] text-gray-five shrink-0 ">3 Guests</h4>
        )}
      </div>
    </div>
  );
};

export default HostListingCard;
