import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] bg-white">
      <div className="flex w-[80%] mx-auto items-center justify-between h-[12vh]">
        <div className="relative w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain">
          <Image src="/images/logo.png" alt="logo" layout="fill" />
        </div>
        <div className="flex items-center space-x-12">
          <a href="#" className="nav-link">
            Tour
          </a>
          <a href="#" className="nav-link">
            Hotel
          </a>
          <a href="#" className="nav-link">
            Review
          </a>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <a
            href="#"
            className="relative hidden lg:inline-flex items-center justify-center px-10 py-3 overflow-hidden
                font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span
              className="absolute w-0 h-0transition-all duration-500 ease-out bg-red-600 rounded-full 
                group-hover:w-56 group-hover:h-56"
            ></span>
            <span
              className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent
                via-transparent to-gray-700"
            ></span>
            <span className="relative">Book Now</span>
          </a>
          <Bars3Icon
            onClick={openNav}
            className="w-[2rem] lg:hidden h-[2rem] text-blue-800 font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
