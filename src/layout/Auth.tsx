import React, { FC, memo } from "react";
import { ReactElement } from "react";

// components

import IndexNavbar from "@/components/navbars/IndexNavbar";
import FooterSmall from "@/components/footer/FooterSmall";

interface AuthProps {
  children? : ReactElement
}

export const Auth: FC<AuthProps> = memo(({children} : AuthProps) => {
  return (
    <>
      <IndexNavbar />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  )
})

Auth.displayName = "Auth"

export default Auth
