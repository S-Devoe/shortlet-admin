import Badge from "@/components/badge/badge";
import Button from "@/components/buttons/button";
import Image from "next/image";

interface Props {
  isRefunded: boolean;
  onRefundClick: () => void;
}
const CancelledRefundCard = ({ isRefunded, onRefundClick }: Props) => {
  return (
    <div className="w-full flex justify-between bg-[#F9FAFC] gap-[1rem] rounded-[1rem] p-[1rem] ">
      <div className="flex items-center gap-4">
        <div className="relative h-[7rem] w-[7rem] shrink-0">
          <Image
            src="/listings/booked-house.png"
            alt="img"
            fill
            className="rounded-[0.5rem]"
            sizes="100%"
          />
          <Badge
            text="Refund Pending"
            className="w-full absolute bottom-[0.25rem] px-[0] bg-jasmine-fainter text-jasmine capitalize z-[2] "
          />
        </div>
        <div className="w-full flex flex-col justify-between gap-3 h-full">
          <div className="">
            <h2 className="text-[1.125rem] font-[700] text-black ">
              Eko Atlantic Stays
            </h2>
            <h4 className="text-[1rem] font-normal text-[#231F20] shrink-0 ">
              11 Nov - 13 Nov
            </h4>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-[1rem] font-normal text-[#231F20] shrink-0 ">
              Akitoye Adeyemi
            </h4>
            <p className="text-[1rem] font-normal text-[#231F20] truncate">
              Had an emergency and won’t be able to make it for my trip
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h3 className="text-primary text-[1.5rem] font-[700]">₦1200</h3>
        <div className="mt-auto flex flex-col items-end">
          <p className="text-[0.875rem] font-normal text-primary leading-[1.5rem] ">
            Refundable amount and caution
          </p>
          <Button
            disabled={isRefunded}
            text="Refund Payment"
            className="!py-[0.8rem] !px-[2.5rem] "
            onClick={onRefundClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CancelledRefundCard;
