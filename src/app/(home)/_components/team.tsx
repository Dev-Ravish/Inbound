import React from "react";
import TeamCard from "./teamCard";
import { siteConfig } from "@/lib/siteConfig";
const Team = () => {
  // const imageUrl =
  //   "https://shorturl.ac/7d32e";
  return (
    <div id="contact">
      <section className=" mt-12 mb-12">
        <article>
          <h2 className="sm:text-3xl text-2xl text-gray-300 text-center">
            {siteConfig.teamCards.title}
          </h2>
          <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.teamCards.cards.map((item) => {
              return (
                <TeamCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
          </section>
        </article>
      </section>
    </div>
  );
};

export default Team;
