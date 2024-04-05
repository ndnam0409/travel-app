import DestinationSlider from "./DestinationSlider";

const TopDestination = () => {
  return (
    <div className="mt-[6rem] mb-[4rem]">
      <h1 className="heading pb-5">Top Destination</h1>
      <div className="mt-[4rem]w-[80%] mx-auto">
        <DestinationSlider />
      </div>
    </div>
  );
};

export default TopDestination;
