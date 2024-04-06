import { StarIcon } from "@heroicons/react/16/solid"; // or the correct path where StarIcon is exported
import Image from "next/image";

interface Props {
  image: string;
  name: string;
}

const ClientReview = ({ image, name }: Props) => {
  return (
    <div className="p-4">
      <div>
        <Image
          src={`${image}`}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mx-auto"
        />
      </div>
      <p className="mt-[2rem] text-center text-[16px] text-black opacity-60">
        Thank you team for giving me such a satisfying experience. Go on a day
        when the weather is nice and enjoy the wonderful scenery of Ha Long Bay.
        It was a great experience for me.
      </p>
      <div className="mt-[2rem]">
        <div className="flex w-[100%] text-center justify-center items-center space-x-1">
          <StarIcon className="text-yellow-600 h-[1rem] w-[1rem]" />
          <StarIcon className="text-yellow-600 h-[1rem] w-[1rem]" />
          <StarIcon className="text-yellow-600 h-[1rem] w-[1rem]" />
          <StarIcon className="text-yellow-600 h-[1rem] w-[1rem]" />
          <StarIcon className="text-yellow-600 h-[1rem] w-[1rem]" />
        </div>
      </div>
      <h1 className="mt-[0.5rem] font-bold text-center text-[18px] text-black mb-[0.3rem]">
        {name}
      </h1>
      <p className="text-center text-black text-[15px] opacity-70">Traveler</p>
    </div>
  );
};

export default ClientReview;
