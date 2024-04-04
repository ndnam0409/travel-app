import { MapIcon } from "@heroicons/react/16/solid";

const SearchBox = () => {
  return (
    <div
      className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      items-center justify-center gap-[2rem] mt-[3rem] w-[80%]"
    >
      <div className="flex items-center space-x-6">
        <MapIcon className="w-[1.5rem] h-[1.5rem] text-red-600" />
        <div>
          <p className="text-[18px] font-semibold mb-[0.2rem]">Location</p>
          <input
            className="outline-none border-none"
            type="text"
            placeholder="Where are you going?"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
