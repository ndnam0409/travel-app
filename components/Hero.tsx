import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <div className="relative w-[100%] h-[88vh]">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-blue-800 opacity-50"></div>
      <video
        src="/images/hero.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-[100%] h-[100%] object-cover"
      />
      <div className="absolute z-[100]  w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="flex items-center justify-center flex-col w-[100%] h-[100%]">
          <div>
            <h1
              className="text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem]
            text-white font-bold uppercase"
            >
              Let's Enjoy The Journey
            </h1>
            <p className="md:text-[16px] text-center text-[18px] text-white font-normal [word-spacing:3px]">
              Get the best prices on 2,000,000+ properties, worldwide
            </p>
          </div>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
