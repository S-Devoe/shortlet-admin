import { Fragment } from "react";
import HostBookingPaymentTab from "./tabs/HostBookingPaymentTab";
import GuestRefundPaymentTab from "./tabs/GuestRefundPaymentTab";
import CancelledBookingRefundTab from "./tabs/CancelledBookingRefundTab";
import FilterDropdown from "./components/FilterDropdown";
import Button from "@/components/buttons/button";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PaginationComponent from "@/components/pagination/pagination.component";

const PaymentPageContent = () => {
  return (
    <Fragment>
      <section className="w-full flex flex-col gap-5">
        <Tabs isLazy variant={"unstyled"}>
          <TabList
            borderBottomWidth={"1px"}
            fontWeight={"medium"}
            className="!flex text-gray-three"
            fontSize={"16px"}
            width={"fit-content"}
            mx={"auto"}
          >
            {bookingTab.map((item, i) => (
              <Tab
                px={"2rem"}
                pb={"3"}
                fontSize={"1rem"}
                textTransform={"capitalize"}
                key={i}
                _selected={{ color: "#FF5626" }}
                className="!whitespace-nowrap"
              >
                {item.label}
              </Tab>
            ))}
          </TabList>
          <TabIndicator
            mt={"-1px"}
            color={"#FF5626"}
            height="1px"
            bg="#FF5626"
            borderRadius="1px"
            className="!hidden md:!block"
          />

          <div className="mb-2 mt-4 flex flex-col md:flex-row items-center gap-4 justify-between">
            <FilterDropdown intialValue="All Bookings" />
            <div className="w-full flex items-center gap-4">
              <FilterDropdown intialValue="Month" />
              <FilterDropdown intialValue="Year" />
            </div>
            <Button className="w-full !py-4 !rounded-2xl" text="Filter" />
          </div>
          <TabPanels>
            {bookingTab.map((item, i) => (
              <TabPanel px="0" key={i + 1}>
                {item.component}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </section>
      <section className="w-full flex flex-col gap-[2.5rem] mt-2 md:mt-20">
        <PaginationComponent />
      </section>
    </Fragment>
  );
};

export default PaymentPageContent;

export const bookingTab = [
  {
    label: "Host Booking Payment",
    value: "hostBookingPayment",
    component: <HostBookingPaymentTab tabValue="hostBookingPayment" />,
  },
  {
    label: "Guests Refundable Caution Payment",
    value: "guestsRefund",
    component: <GuestRefundPaymentTab tabValue="guestsRefund" />,
  },
  {
    label: "Cancelled Bookings Refund",
    value: "cancelledBookingsRefund",
    component: <CancelledBookingRefundTab />,
  },
];

const dropDown = [
  { initialValue: "All Bookings", dropDown: [] },
  { initialValue: "Month", dropDown: [] },
  { initialValue: "Year", dropDown: [] },
];
