import { useState } from "react";
import Link from "next/link";



export default function IndexDropdown() {

  const [dropdownPoperShow, setDropdownPoperShow] = useState(false);
  return (
    <>
      <a
        className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        rel="noreferrer"
        onClick={(e) => {
          e.preventDefault();
          setDropdownPoperShow(!dropdownPoperShow);
        }}
      >        
        Demo pages
      </a>
      <div className={ (dropdownPoperShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-[48px]"}>
        <span className="text-sm pt-2 pb-0 px-4 font-bold w-full whitespace-nowrap text-slate-500">Admin Layout</span>
      </div>
    </>
  );
}