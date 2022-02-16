import React from "react";

export default function Jonathan() {
  return (
    <article className="flex h-[15rem] w-full flex-col gap-[1.125rem] rounded-[8px] bg-[#48556A] px-8 pt-[1.625rem] pb-8 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.2474)] xl:h-[17.625rem] xl:w-[15.938rem]">
      <div className="z-10 flex items-center gap-[1.063rem]  ">
        <div className="h-[1.75rem] w-[1.75rem] rounded-full ">
          <img
            className="h-[1.75rem] w-[1.75rem] rounded-full"
            src={require("../images/image-jonathan.jpg")}
            alt="Jonathan's Avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.813rem] font-medium leading-[0.813rem] tracking-normal text-white">
            Jonathan Walters
          </p>
          <p className="text-[0.688rem] font-medium leading-[0.688rem] tracking-normal text-white/50">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-4">
        <h2 className="text-xl font-semibold leading-6 tracking-normal text-white">
          The team was very supportive and kept me motivated
        </h2>
        <p className="text-medium text-[0.813rem] leading-[1.125rem] tracking-normal text-white/70">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. “
        </p>
      </div>
    </article>
  );
}
