import CancelledRefundCard from "../components/CancelledRefundCard";

const CancelledBookingRefundTab = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-6">
      {Array(3)
        .fill(" ")
        .map((_, i) => (
          <CancelledRefundCard
            key={`card-${i + 1}`}
            isRefunded={(i + 1) % 3 === 0 ? true : false}
          />
        ))}
    </section>
  );
};

export default CancelledBookingRefundTab;
