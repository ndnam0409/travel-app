import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <div>
        <Image
          src="/images/d1.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Washington</h1>
        <p className="destination__p">33 Hotels</p>
      </div>

      <div>
        <Image
          src="/images/d2.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Tokyo</h1>
        <p className="destination__p">13 Hotels</p>
      </div>

      <div>
        <Image
          src="/images/d3.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Bangalore</h1>
        <p className="destination__p">27 Hotels</p>
      </div>

      <div>
        <Image
          src="/images/d4.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Singapore</h1>
        <p className="destination__p">29 Hotels</p>
      </div>

      <div>
        <Image
          src="/images/d5.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Berlin</h1>
        <p className="destination__p">23 Hotels</p>
      </div>

      <div>
        <Image
          src="/images/d6.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Sydney</h1>
        <p className="destination__p">11 Hotels</p>
      </div>
    </Carousel>
  );
};

export default DestinationSlider;
