import React from "react";

export default function Testimonials() {
  return (
    <main className="grid place-content-center gap-6 xl:grid-cols-4 xl:gap-x-[1.875rem] xl:gap-y-6">
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
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </article>
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
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. “
          </p>
        </div>
      </article>
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
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the{" "}
            <br className="hidden xl:inline" />
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </article>
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
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </article>
    </main>
  );
}
