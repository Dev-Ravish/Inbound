import { siteConfig } from "@/lib/siteConfig";
import React from "react";
import AboutCard from "./about-card";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-200 body-font">
        <div className=" py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              {siteConfig.about.title.toUpperCase()}
            </h1>
            <p className="lg:w-3/4 mx-auto leading-relaxed text-sm sm:text-xl">
              {siteConfig.about.content}
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-200 body-font">
        <div className=" py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              {siteConfig.aboutCards.title.toUpperCase()}
            </h1>
          </div>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.aboutCards.cards.map((card) => (
              <AboutCard
                key={card.title}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
