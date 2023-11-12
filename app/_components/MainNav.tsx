import React from "react";
import Logo from "../_assets/MADE.svg";
import Image from "next/image";
import { NavigationMenuService } from "./DropMenu";
import { ModeToggle } from "./toggle-mode";
import SvgLogo from "./Logo/Logo";

const MainNav = () => {
  return (
    <div className="dark:bg-black bg-white dark:text-white flex justify-between border dark:border-white border-black px-10 rounded-full items-center mb-20 w-full">
      <div className="p-4">
        <a href="/">
          <SvgLogo />
        </a>
      </div>
      <div>
        <ul className="flex justify-center items-center">
          <li className="p-4">
            <NavigationMenuService />
          </li>
          <li><ModeToggle /></li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
