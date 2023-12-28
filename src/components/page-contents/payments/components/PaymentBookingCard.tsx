"use client";

import Badge from "@/components/badge/badge";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  paymentStatus: string;
  bookingStatus: string;
  tabValue: string;
}
const PaymentBookingCard = ({
  bookingStatus,
  paymentStatus,
  tabValue,
}: Props) => {
  const router = useRouter();

  const variant = (status: string) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "pending";
      case "payment pending":
        return "pending";
      case "ongoing":
        return "primary";
      case "upcoming":
        return "instance";
      case "completed":
        return "success";
      case "payment complete":
        return "success";
      default:
        return "primary";
    }
  };

  return (
    <button
      type="button"
      onClick={() =>
        router.push(
          `/payments/23?bookingStatus=${bookingStatus}&paymentStatus=${paymentStatus}&tabValue=${tabValue}`
        )
      }
      className="w-full flex items-center bg-[#F9FAFC] gap-[1rem] rounded-[1rem] p-[1rem] "
    >
      <div className="relative h-[7rem] w-[7rem] shrink-0">
        <Image
          src="/listings/booked-house.png"
          alt="img"
          fill
          className="rounded-[0.5rem]"
          sizes="100%"
        />
      </div>
      <div className="w-full flex flex-col justify-between h-full">
        <div className="w-full flex justify-between">
          <Badge
            text={bookingStatus}
            className="lg:mt-[2px] capitalize border-[2px] border-white "
            variant={variant(bookingStatus)}
          />
          <Badge
            text={paymentStatus}
            className="capitalize border-[2px] border-white "
            variant={variant(paymentStatus)}
          />
        </div>
        <div className="flex flex-col items-start gap-[0.5rem]">
          <h2 className="text-[1.125rem] font-[700] text-black ">
            Eko Atlantic Stays
          </h2>
          <div className="shrink-0 flex items-center w-full gap-6">
            <h4 className="text-[0.875rem] font-normal text-[#231F20] shrink-0 ">
              11 Nov - 13 Nov
            </h4>
            <div className="w-full flex gap-[2px] items-center">
              <AvatarGroup spacing={"-0.65rem"} size="xs" max={3}>
                <Avatar name="img" src="/profile/Avatar.png" />
                <Avatar name="img" src="/profile/Avatar.png" />
                <Avatar name="img" src="/profile/Avatar.png" />
              </AvatarGroup>
              <h4 className="text-[0.875rem] font-normal text-gray-five shrink-0 ">
                3 Guests
              </h4>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PaymentBookingCard;
