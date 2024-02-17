import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import EarthCanvas from "./earth-canvas";
import StarsCanvas from "./star-canvas";

const HeroSection = () => {
  return (
    <section id="#about" className="overflow-x-hidden">
      <StarsCanvas />
      {/* <div className="grid grid-cols-1 lg:grid-cols-5 place-content-between">
        <div className="col-span-5 lg:col-span-2 flex flex-col items-center justify-center h-screen">
          <Image
            src="/inbound.png"
            height={261}
            width={637}
            alt="inbound image"
            className="mix-blend-screen"
          />
          <h1 className="text-3xl">{siteConfig.siteSlogan}</h1>
        </div>
        <div className="  h-full w-full col-span-5 lg:col-span-3 lg:flex lg:justify-center">
          <div className="w-full h-full flex justify-center">
            <EarthCanvas />
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-[30vh] lg:h-screen px-6 md:px-5 lg:px-0">
          <Image
            src="/inbound.png"
            height={261}
            width={637}
            alt="inbound image"
            priority
            className="mix-blend-screen"
          />
          <h1 className="text-2xl md:text-3xl">{siteConfig.siteSlogan}</h1>
        </div>
        <div className="  h-full w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full h-[400px] sm:h-[600px]  md:h-[800px] my-auto flex justify-center items-center">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;