import { useState } from "react";
import Link from "next/link";
import IndexDropdown from "../dropdowns/IndexDropdown";

export default function IndexNavbar(props : any) {
  
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="w-full fixed z-50 flex flex-wrap bg-white py-3 px-2 justify-between items-center shadow">
        <div className="container mx-auto flex flex-wrap px-4 justify-between">
          <div className="w-full text-slate-700 flex flex-wrap items-center justify-between lg:w-auto">
            <Link href={"/"} legacyBehavior>
              <a href="#pablo" className="text-lg lg:text-sm font-bold uppercase py-2 mr-2">
                Notus NextJS
              </a>
            </Link>
            <button type="button" className="cursor-pointer px-3 py-1 text-xl border border-solid rounded lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          
          </div>
          <div className={"text-slate-700 lg:flex flex-grow items-center lg:bg-opacity-0 bg-white lg:shadow-none" + (navbarOpen ? " block" : " hidden")}>
            <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
              <li className="items-center">
                <a className="flex hover:text-slate-500 font-bold uppercase text-xs items-center px-3 py-4"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar">
                  <i className="far fa-file-alt text-lg mr-2" />{" "}Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-slte-500 text-slte-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-slate-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}