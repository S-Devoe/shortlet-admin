import SearchNormalIcon from "@/icons/search-normal.icon";
import ListingsSection from "./sections/ListingsSection";

const ListingPageContent = () => {
  return (
    <section className="w-full flex flex-col gap-[2.6rem]">
      <div className="text-gray-four font-normal text-[0.875rem] w-full h-fit flex items-center gap-2 p-4 rounded-2xl border border-gray-five ">
        <SearchNormalIcon />
        <input
          type="search"
          placeholder="Search for a host"
          className="w-full h-full border-none outline-none focus:border-none focus:outline-none"
        />
      </div>
      <ListingsSection />
    </section>
  );
};

export default ListingPageContent;
