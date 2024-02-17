import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Suspense } from "react";

const Video = ({ url, title  }: { url: string, title:string }) => {
  return (
    <div className=" w-full h-full text-center  rounded-xl flex justify-center items-center mt-10">
      <AspectRatio ratio={16 / 9} className="flex justify-center items-center">
        <Suspense fallback={<div>Loading.....</div>}>
          <iframe width={"100%"}  className="w-full h-full rounded-lg"   src={url} title={title} allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
        </Suspense>
      </AspectRatio>
    </div>
  );
};

export default Video;
