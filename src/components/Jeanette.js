import React from "react";

export default function Jeanette() {
  return (
    <article className="flex h-[13.875rem] w-full flex-col gap-[1.125rem] rounded-[8px] bg-white px-8 pt-[1.625rem] pb-8 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.2474)] xl:h-[16.625rem] xl:w-[15.938rem]">
      <div className="z-10 flex items-center gap-[1.063rem]  ">
        <div className="h-[1.75rem] w-[1.75rem] rounded-full ">
          <img
            className="h-[1.75rem] w-[1.75rem] rounded-full"
            src={require("../images/image-jeanette.jpg")}
            alt="Jeanette's Avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.813rem] font-medium leading-[0.813rem] tracking-normal text-[#48556A]">
            Jeanette Harmone
          </p>
          <p className="text-[0.688rem] font-medium leading-[0.688rem] tracking-normal text-[#48556A]/50">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-4 xl:gap-6">
        <h2 className="text-xl font-semibold leading-6 tracking-normal text-[#48556A]">
          An overall wonderful and rewarding experience
        </h2>
        <p className="text-medium text-[0.813rem] leading-[1.125rem] tracking-normal text-[#48556A]/70">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </p>
      </div>
    </article>
  );
}
