import Image from "next/image";

const Contact = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div>
          <Image
            src="/images/c1.png"
            alt="fly"
            width={600}
            height={400}
            className="object-contain rounded-xl mx-auto p-[1rem]"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center w-[90%] xl:w-[70%] tracking-[0.1rem] mx-auto font-bold text-[20px] md:text-[30px] text-black">
            Get special offers and more from Traveler
          </h1>
          <p className="mt-[0.7rem] w-[80%] xl:w-[60%] mx-auto text-center text-[15px] text-black opacity-70">
            Subcribe to see the secret deals prices drop the moment you sign up
          </p>
          <div
            className="flex mt-[1.4rem] rounded-lg bg-gray-300 mb-[3rem] items-center space-x-2 w-[80%] h-[4vh]
          md:h-[6.3vh]"
          >
            <input
              type="email"
              placeholder="Email address"
              className="ml-[1rem] bg-transparent w-[80%] h-[100%] border-none outline-none"
            />
            <button className=" ml-[1rem] px-4 py-2 bg-red-600 text-white font-bold rounded-lg h-[100%]">
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
