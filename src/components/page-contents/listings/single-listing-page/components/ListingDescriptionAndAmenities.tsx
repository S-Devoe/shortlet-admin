import Button from "@/components/buttons/button";
import "./style.css";
import TaskSquareIcon from "@/icons/task-square.icon";

const ListingDescriptionAndAmenities = () => {
  return (
    <section className="w-full flex flex-col gap-[2.5rem]">
      <div className="">
        <h3 className="listing-mini-header">Description</h3>
        <p className="listing-text-lighter mt-2">
          This cozy 2-bedroom apartment offers a perfect blend of comfort and
          convenience. With its modern amenities, spacious layout, and prime
          location, this apartment is an ideal choice for those seeking a
          stylish urban living experience.
        </p>
        <p className="listing-text-lighter mt-2">
          This very stylish modern contemporary house is designed for having
          great group trips. It’s located in a very secure, quiet and green
          residential area. The large floor to ceiling window makes the house
          very bright and
        </p>
      </div>

      <div className="">
        <h3 className="listing-mini-header">Refundable Caution</h3>
        <p className="listing-text-lighter mt-2">₦50</p>
      </div>

      <div className="">
        <h3 className="listing-mini-header">Amenities</h3>
        <div className="mt-2 flex flex-col gap-3 ">
          {amenities.map((amenity, i) => (
            <div
              key={`amenity-${i + 1}`}
              className="flex items-center gap-2 text-[#757D8A] text-[1rem] font-normal "
            >
              <span className="w-[1.5rem]">
                <TaskSquareIcon />
              </span>
              <p>{amenity}</p>
            </div>
          ))}
        </div>

        <Button
          text="Show all amenities"
          variant="orangeOutline"
          className="w-fit mt-5 px-[2.5rem]"
        />
      </div>
    </section>
  );
};

export default ListingDescriptionAndAmenities;

const amenities = [
  "Kitchen",
  "Free Wi-Fi",
  "Parking",
  "Air Conditioning",
  "Private Pool",
  "TV",
];
