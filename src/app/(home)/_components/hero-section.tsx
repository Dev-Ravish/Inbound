import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
import EarthCanvas from "./earth-canvas";
import StarsCanvas from "./star-canvas";
import localFont from 'next/font/local'
const myFont = localFont({
  src: './BrushScriptStd.otf',
  display: 'swap',
})
const HeroSection = () => {
  return (
    <section id="#about" className="overflow-x-hidden">
      <StarsCanvas />
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center h-[35vh] lg:h-screen px-8 md:px-5 lg:px-0">
          <Image
            src="/inbound.png"
            height={261}
            width={637}
            alt="inbound image"
            priority
            className="mix-blend-screen"
          />
          <h1 className={`text-3xl md:text-5xl ${myFont.className}`}>{siteConfig.siteSlogan}</h1>
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