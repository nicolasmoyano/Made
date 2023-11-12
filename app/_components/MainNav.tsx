import React from "react";
import Logo from "../_assets/MADE.svg";
import Image from "next/image";
import { NavigationMenuService } from "./DropMenu";

const MainNav = () => {
  return (
    <div className="bg-black text-white flex justify-between border border-white px-10 rounded-full items-center mb-20 w-full">
      <div className="p-4">
        <a href="/">
          <Image src={Logo} alt="Logo for MADE."></Image>
        </a>
      </div>
      <div>
        <ul className="flex">
          <li className="p-4">
            <NavigationMenuService />
          </li>
        </ul>
      </div>
      {/* <div>
        <button className="bg-lime-400 p-2 hover:-translate-x-1 font-semibold text-black border border-black rounded-md hover:shadow-plain-sm hover:shadow-white  transition-all">
          Lets do this!
        </button>
      </div> */}
    </div>
  );
};

export default MainNav;
