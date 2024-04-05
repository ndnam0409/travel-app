import HotelCard from "./HotelCard";

const Hotels = () => {
  return (
    <div className="pt-[5rem] bg-gray-200 pb-[4rem]">
      <h1 className="heading">Best Hotel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        <div>
          {" "}
          <HotelCard
            name="Royal Magestic Saigon Hotel"
            city="Ho Chi Minh"
            image="/images/h1.png"
            price="$250"
            reviewNum="23"
          />{" "}
        </div>
        <div>
          <HotelCard
            name="OPAL Boulevard Hotel"
            city="Bangalore"
            image="/images/h2.png"
            price="$175"
            reviewNum="17"
          />{" "}
        </div>
        <div>
          <HotelCard
            name="Evergreen Land Hotel"
            city="New York"
            image="/images/h3.png"
            price="$200"
            reviewNum="13"
          />{" "}
        </div>
        <div>
          <HotelCard
            name="Manchester Evening Hotel"
            city="London"
            image="/images/h4.png"
            price="$120"
            reviewNum="27"
          />{" "}
        </div>
        <div>
          <HotelCard
            name="Mandalay Bay Sand Hotel"
            city="Las Vegas"
            image="/images/h5.png"
            price="$175"
            reviewNum="20"
          />{" "}
        </div>
        <div>
          <HotelCard
            name="Sofitel Metropole Hotel"
            city="Mumbai"
            image="/images/h6.png"
            price="$123"
            reviewNum="15"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
