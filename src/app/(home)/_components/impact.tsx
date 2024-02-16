import React from 'react'
import ImpactCard from './impactCard'
import { siteConfig } from '@/lib/siteConfig'
const Impact = () => {

    const imageUrl = "https://shorturl.ac/7d32e";
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
          <h2 className="text-2xl font-extrabold text-gray-300 text-center">
            {siteConfig.impactCards.title}
          </h2>
          <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8">
            {siteConfig.impactCards.Cards.map((item) => {
              return (
                    <div key={item.id}>
                        <ImpactCard
                            key={item.id}
                            image={imageUrl}
                            description={item.description}
                        />
                    </div>
              );
            })}
          </section>
        </article>
      </section>
    </div>
  );
}

export default Impact