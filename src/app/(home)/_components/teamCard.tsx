import Image from "next/image";
import React from "react";
interface TeamCardProps {
  image: string;
  name: string;
  description: any;
}
const TeamCard = ({ image, name, description }: TeamCardProps) => {
  return (
    <div>
      <article className="bg-blue-950 group relative rounded-lg overflow-hidden shadow-lg hover:shadow-lg hover:shadow-gray-700 transform duration-200 h-full">
        <div className="relative w-full h-80 md:h-64 lg:h-44">
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="w-full h-full object-center object-cover"
            />
        </div>
        <div className="px-3 py-4">
          <h3 className="text-sm pb-2">
            <a
              className="bg-indigo-600 py-1 px-2 text-white rounded-lg"
              href="#"
            >
              <span className="absolute inset-0"></span>
              {name}
            </a>
          </h3>
          <p className="text-base  group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default TeamCard;
