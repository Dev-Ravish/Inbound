import { siteConfig } from "@/lib/siteConfig";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-200 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              {siteConfig.about.title.toUpperCase()}
            </h1>
            <p className="lg:w-3/4 mx-auto leading-relaxed text-xl ">
              {siteConfig.about.content}
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-200 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              {siteConfig.aboutCards.title.toUpperCase()}
            </h1>
            
          </div>
        </div>
        </section>
    </div>
  );
};

export default About;
