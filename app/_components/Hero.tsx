import React from "react";
import Subscribe from "./Subscribe";
import dcIllustration from "../_assets/design_components.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container flex">
        <div className="flex-row sm:flex-col">
          <div>
            {/* <div className="w-full">
              <Image
                src={dcIllustration}
                alt="we design components based sites"
              />
            </div> */}
            <h1 className="font-medium text-4xl lg:text-7xl">
            Made By Swedes<br />
            Din One-Stop Designlösning
            </h1>
            <p className="mt-3 text-lg lg:mb-2 lg:mt-4 lg:text-xl lg:w-ch max-w-2xl mb-2 xl:w-fit">
              Prisvärda hemsidor för startups och småföretag. Låt oss växa
              tillsammans!
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row lg:mt-4 link-wrapper mt-3">
            <Subscribe />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
