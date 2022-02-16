import React from "react";
import Daniel from "./Daniel";
import Jonathan from "./Jonathan";
import Jeanette from "./Jeanette";
import Patrick from "./Patrick";
import Kira from "./Kira";

export default function Testimonials() {
  return (
    <main className="grid place-content-center gap-6 xl:grid-cols-4 xl:gap-x-[1.875rem] xl:gap-y-6">
      <Daniel />
      <Jonathan />
      <Jeanette />
      <Patrick />
      <Kira />
    </main>
  );
}
