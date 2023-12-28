import PaymentBookingCard from "../components/PaymentBookingCard";

const GuestRefundPaymentTab = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-4 lg:gap-[1.5rem] lg:grid-cols-2">
      {Array(6)
        .fill(" ")
        .map((_, i) => (
          <PaymentBookingCard
            paymentStatus={
              (i + 1) % 2 === 0 ? "Payment Pending" : "Payment Complete"
            }
            bookingStatus={
              (i + 1) % 3 === 0
                ? "Ongoing"
                : (i + 1) % 5 === 0
                ? "New"
                : (i + 1) % 2 === 0
                ? "Completed"
                : "Upcoming"
            }
            key={`card-${i + 1}`}
          />
        ))}
    </section>
  );
}

export default GuestRefundPaymentTab