import React from "react";

export default function Daniel() {
  return (
    <article className="relative flex h-[27.75rem] w-full flex-col gap-[1.125rem] rounded-[8px] bg-[#733FC8] px-8 pt-[1.625rem] pb-8 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.2474)] xl:col-span-2 xl:h-[17.625rem] xl:w-[33.75rem]">
      <div className="absolute top-0 left-[12.438rem] h-[6.375rem] w-[6.5rem] xl:left-[22.25rem]">
        <svg width="104" height="102" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
            fill="#A775F1"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <div className="z-10 flex items-center gap-[1.063rem]">
        <div className=" rounded-full  border-2 border-solid border-[#A775F1]">
          <img
            className="h-[1.75rem] w-[1.75rem] rounded-full"
            src={require("../images/image-daniel.jpg")}
            alt="Daniel's Avatar"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.813rem] font-medium leading-[0.813rem] tracking-normal text-white">
            Daniel Clifford
          </p>
          <p className="text-[0.688rem] font-medium leading-[0.688rem] tracking-normal text-white/50">
            Verified Graduate
          </p>
        </div>
      </div>
      <div className="z-10 flex flex-col gap-10 xl:gap-4">
        <h2 className="text-xl font-semibold leading-6 tracking-normal text-white">
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h2>
        <p className="text-medium w-[15.438rem] text-[0.813rem] leading-[1.125rem] tracking-normal text-[#CFCFCF]/70 xl:w-full">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </p>
      </div>
    </article>
  );
}
