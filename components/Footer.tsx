import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pd-[2rem] pt-[7rem] bg-gray-100">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
        {/* First  */}
        <div>
          <h1 className="footer__heading">Support</h1>
          <div>
            <a className="footer__link" href="#">
              Help center
            </a>
            <a className="footer__link" href="#">
              Safety information
            </a>
            <a className="footer__link" href="#">
              Cancellation options
            </a>
            <a className="footer__link" href="#">
              Medical doctor
            </a>
          </div>
        </div>

        {/* Second  */}
        <div>
          <h1 className="footer__heading">Company</h1>
          <div>
            <a className="footer__link" href="#">
              About us
            </a>
            <a className="footer__link" href="#">
              Community blog
            </a>
            <a className="footer__link" href="#">
              Careers
            </a>
            <a className="footer__link" href="#">
              Privacy policy
            </a>
            <a className="footer__link" href="#">
              Terms of service
            </a>
          </div>
        </div>

        {/* Third  */}
        <div>
          <h1 className="footer__heading">Contact</h1>
          <div>
            <a className="footer__link" href="#">
              Partnerships
            </a>
            <a className="footer__link" href="#">
              FAQ
            </a>
            <a className="footer__link" href="#">
              Get in touch
            </a>
          </div>
        </div>

        {/* Fourth  */}
        <div>
          <h1 className="footer__heading">Social</h1>
          <div className="flex items-center space-x-4 text-white text-[1.3rem]">
            <div className="footer__icon bg-[#0165e1]">
              <FaFacebookF />
            </div>
            <div className="footer__icon bg-[#cd486b]">
              <FaInstagram />
            </div>
            <div className="footer__icon bg-[#1da1f2]">
              <FaTwitter />
            </div>
            <div className="footer__icon bg-[#cd201f]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[1rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[17px] text-black opacity-60 font-semibold">
          Copyright Nam Nguyen 2024
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
