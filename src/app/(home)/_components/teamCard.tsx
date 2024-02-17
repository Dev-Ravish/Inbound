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
      <article className="bg-blue-950 hover:-translate-y-1 group relative rounded-lg overflow-hidden shadow-lg  transform duration-200 h-full">
        <div className=" lg:w-2/ w-full" >
            <Image
                src={image}
                alt={name}
                width={200}
                height={100}
                className=" max-h-full lg:w-2/3 object-right-bottom md:rounded-e-full md:rounded-b-full mx-auto md:mx-0 pt-4 md:pt-0"
            />
        </div>
        <div className="px-3 py-2 text-center md:text-left">
          <h3 className="text-sm pb-2 pt-2">
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
