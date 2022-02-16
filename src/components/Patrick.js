import React from "react";

export default function Patrick() {
  return (
    <article className="flex h-[24rem] w-full flex-col gap-[1.125rem] rounded-[8px] bg-[#19202D] px-8 pt-[1.625rem] pb-8 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.2474)] xl:col-span-2 xl:h-[16.625rem] xl:w-[33.75rem]">
      <div className="z-10 flex items-center gap-[1.063rem]  ">
        <div className="rounded-full border-2 border-solid border-[#733FC8] ">
          <img
            className="h-[1.75rem] w-[1.75rem] rounded-full"
            src={require("../images/image-patrick.jpg")}
            alt="Jeanette's Avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-[0.813rem] font-medium leading-[0.813rem] tracking-normal text-white">
            Patrick Abrams
          </p>
          <p className="text-[0.688rem] font-medium leading-[0.688rem] tracking-normal text-white/50">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-4 xl:gap-6">
        <h2 className="text-xl font-semibold leading-6 tracking-normal text-[#ECF2F8]">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experiences was
          easy.
        </h2>
        <p className="text-medium text-[0.813rem] leading-[1.125rem] tracking-normal text-white/70">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the{" "}
          <br className="hidden xl:inline" />
          personal attention you need from an incredible community of smart and
          amazing people. ”
        </p>
      </div>
    </article>
  );
}
