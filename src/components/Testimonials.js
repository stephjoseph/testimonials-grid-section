import React from "react";

export default function Testimonials() {
  return (
    <div className="grid gap-6">
      <div className="relative flex w-full flex-col gap-[1.125rem] bg-[#733FC8] shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.2474)]">
        <div className="absolute">
          <img src={require("../images/bg-pattern-quotaion.svg")} alt="" />
        </div>
      </div>
    </div>
  );
}
