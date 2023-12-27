import Image from "next/image";
import Hotel1 from "@/assets/images/hotel-img1.png";
import Hotel2 from "@/assets/images/hotel-img2.png";
import Hotel3 from "@/assets/images/hotel-img3.png";
import Hotel4 from "@/assets/images/hotel-img4.png";
import Hotel5 from "@/assets/images/hotel-img5.png";
import RatingStar from "@/icons/rating-star.icon";
import CircleSvg from "@/icons/circle-svg.icon";
import Button from "@/components/buttons/button";
import Badge from "@/components/badge/badge";
import AcceptListingModal from "../modals/AcceptListingModal";
import DeclineListingModal from "../modals/DeclineListingModal";
import { useDisclosure } from "@chakra-ui/react";

interface Props {
  status?: string;
}
const ListingInfo = ({ status }: Props) => {
  const {
    isOpen: isAcceptOpen,
    onOpen: OnAcceptOpen,
    onClose: onAcceptClose,
  } = useDisclosure();

  const {
    isOpen: isDeclineOpen,
    onOpen: onDeclineOpen,
    onClose: onDeclineClose,
  } = useDisclosure();

  return (
    <>
      <section className="w-full">
        <div className="w-full flex flex-col gap-3 md:flex-row justify-between text-center">
          <div className="flex gap-2 items-center ">
            <div className="flex flex-col">
              <h1 className="text-[2.5rem] text-start font-bold text-primary font-serif  ">
                Eko Atlantic Shortstays
              </h1>

              <div className="w-full flex items-center flex-wrap gap-4 text-gray font-normal text-[0.875rem] ">
                <div className="flex gap-1 w-fit items-center">
                  <RatingStar />
                  <p className="text-[1rem]">4.8</p>
                </div>
                <p>18 reviews</p>
                <p>Lagos, Nigeria</p>
                <p>6 guests</p>
                <CircleSvg />
                <p>3 Bedrooms</p>
              </div>
            </div>
            {status === "approved" ? (
              <Badge
                text="Approved"
                className="capitalize font-normal mt-[-0.5rem]"
                variant="success"
              />
            ) : status === "declined" ? (
              <Badge
                text="Declined"
                className="capitalize font-normal mt-[-0.5rem]"
                variant="destructive"
              />
            ) : null}
          </div>
          <Button
            text="View Host Profile"
            variant="orangeOutline"
            className="h-fit flex flex-row-reverse w-fit gap-2 p-4 text-[1rem] font-medium"
            icon={
              <div className="relative rounded-full h-[2rem] w-[2rem] border-[4px] border-white  ">
                <Image
                  src="/profile/Avatar.png"
                  alt="img"
                  fill
                  sizes="100%"
                  className="rounded-full"
                />
              </div>
            }
          />
        </div>
        <div className="mt-4 md:my-[2rem] flex justify-between md:justify-start items-center gap-4 ">
          {status === "pending" ? (
            <>
              <Button
                text="Approve Listing"
                onClick={OnAcceptOpen}
                className="h-fit w-full md:w-fit gap-[0.65rem] text-[1rem] font-medium py-[1rem] lg:py-[1.03rem] lg:px-[2.5rem] rounded-lg"
              />
              <Button
                text="Decline Listing"
                variant="orangeOutline"
                onClick={onDeclineOpen}
                className="h-fit w-full md:w-fit text-[1rem] font-medium py-[1rem] lg:py-[1.03rem] lg:px-[2.5rem] rounded-lg "
              />
            </>
          ) : (
            <Button
              text="Delete Listing"
              className="h-fit gap-[0.65rem] text-[1rem] font-medium py-[1.03rem] px-[2.5rem] rounded-lg"
            />
          )}
        </div>

        <div className="hidden w-full lg:grid grid-cols-2 gap-[1.125rem] ">
          <div className="h-[30rem] relative">
            <Image
              src={Hotel1}
              alt="img"
              fill
              sizes="100%"
              className="rounded-l-[1rem]"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-[1.125rem]">
            <div className="relative">
              <Image src={Hotel2} alt="img" fill sizes="100%" />
            </div>
            <div className="relative">
              <Image
                src={Hotel4}
                alt="img"
                fill
                sizes="100%"
                className="rounded-tr-[1rem]"
              />
            </div>
            <div className="relative">
              <Image src={Hotel3} alt="img" fill sizes="100%" />
            </div>

            <div className="relative">
              <Image
                src={Hotel5}
                alt="img"
                fill
                sizes="100%"
                className="rounded-br-[1rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <AcceptListingModal isOpen={isAcceptOpen} onClose={onAcceptClose} />
      <DeclineListingModal isOpen={isDeclineOpen} onClose={onDeclineClose} />
    </>
  );
};

export default ListingInfo;
