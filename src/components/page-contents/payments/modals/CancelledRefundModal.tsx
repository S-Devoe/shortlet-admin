"use client";
import BackBtn from "@/components/buttons/backButton";
import Button from "@/components/buttons/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import GuestListingCard from "../components/GuestListingCard";
import { Fragment, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const CancelledRefundModal = ({ isOpen, onClose }: Props) => {
  const [stage, setStage] = useState(1);

  const onRefund = () => {
    setStage(2);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent className="!w-full !mx-4 !rounded-[1rem] !p-[1.5rem] md:!p-[2.5rem] !max-w-[40rem]">
        <BackBtn onClick={onClose} />
        <ModalBody className="!p-0 md:!p-4 !flex !flex-col !items-center ">
          {stage <= 1 ? (
            <Fragment>
              <h1 className="md:mt-[3rem] font-serif text-center text-primary-lighter font-semibold text-[2.25rem]">
                ₦1200
              </h1>
              <section className="w-full max-w-[19rem]">
                <GuestListingCard />
              </section>

              <section className="w-full flex flex-col items-center gap-4">
                <ModalHeader className="!my-[1.5rem] !font-serif !font-semibold !p-0 !text-center !text-primary-lighter !text-[1.25rem]">
                  Are you sure you want to refund this guest?
                </ModalHeader>

                <Button
                  onClick={onRefund}
                  text="Yes, refund guest"
                  className="w-full md:max-w-[15rem] py-3"
                />
                <Button
                  onClick={onClose}
                  text="No, cancel"
                  variant="outline"
                  className="w-full md:max-w-[15rem] py-3"
                />
              </section>
            </Fragment>
          ) : (
            <Fragment>
              <h1 className="md:mt-[3rem] mb-[2.5rem] font-serif text-center text-primary-lighter font-semibold text-[1.5rem]">
                You have successfully refunded Adeyemi Akitoye
                <span className="block text-[2.5rem] "> ₦1200</span>
              </h1>
              <Button
                onClick={() => {
                  onClose();
                  setStage(1);
                }}
                text="Finish"
                className="w-full md:max-w-[15rem] py-3"
              />
            </Fragment>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CancelledRefundModal;
