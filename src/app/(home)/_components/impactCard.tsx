import Image from "next/image";

const ImpactCard = ({ image, description }:{image:string,description:string}) => {
  return (
    <div  className="group relative cursor-pointer overflow-hidden bg-blue-950 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 h-full">
      <span className="absolute top-10 z-0 h-32 w-32 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <div className="grid h-32 w-32 place-items-center rounded-full transition-all bg-red-400 duration-300 ">
        <Image
                src={image}
                alt="icon"
                width={128}
                height={128}
                className="bg-contain overflow-hidden rounded-full"
            />
        </div>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-300 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
