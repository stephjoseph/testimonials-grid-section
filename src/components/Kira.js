import React from "react";

export default function Kira() {
  return (
    <article className="flex h-[27.375rem] w-full flex-col gap-[1.125rem] rounded-[8px] bg-white px-8 pt-[1.625rem] pb-8 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.2474)] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:h-[35.75rem] xl:w-[15.938rem]">
      <div className="z-10 flex items-center gap-[1.063rem]  ">
        <div className="h-[1.75rem] w-[1.75rem] rounded-full ">
          <img
            className="h-[1.75rem] w-[1.75rem] rounded-full"
            src={require("../images/image-kira.jpg")}
            alt="Kira's Avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.813rem] font-medium leading-[0.813rem] tracking-normal text-[#48556A]">
            Kira Whittle
          </p>
          <p className="text-[0.688rem] font-medium leading-[0.688rem] tracking-normal text-[#48556A]/50">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-4 xl:gap-6">
        <h2 className="text-xl font-semibold leading-6 tracking-normal text-[#48556A]">
          Such a life-changing experience. Highly recommended!
        </h2>
        <p className="text-medium text-[0.813rem] leading-[1.125rem] tracking-normal text-[#48556A]/70">
          “ Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </p>
      </div>
    </article>
  );
}
