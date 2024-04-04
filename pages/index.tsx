import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNavHandlder = () => setNav(true);
  const closeNavHandlder = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNavHandlder} />
      <Navbar openNav={openNavHandlder} />
      <Hero />
    </div>
  );
};

export default HomePage;
