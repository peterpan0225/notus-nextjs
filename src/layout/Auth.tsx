import React from "react";
import { ReactElement } from "react";

// components

import IndexNavbar from "@/components/navbars/IndexNavbar";
import FooterSmall from "@/components/footer/FooterSmall";

interface ElementProps {
  children? : ReactElement
}

export default function Auth({ children } : ElementProps) {
  return (
    <>
      <IndexNavbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
