import React  from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import IndexItem from "./IndexItem";

export default function IndexDropdown() {

  const [dropdownPoperShow, setDropdownPoperShow] = React.useState(false);
  const btnDropdownRef = React.createRef<HTMLElement>();
  const popperDropdownRef = React.createRef<HTMLElement>();
  const openDropdownPopper = () => {
    createPopper(btnDropdownRef.current as HTMLElement, popperDropdownRef.current as HTMLElement, {
        placement: "bottom-start",
    });
    setDropdownPoperShow(true);
  }
  const closeDropdownPopper = () => {
    setDropdownPoperShow(false);
  }

  return (
    <>
      <a
        className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef as React.RefObject<HTMLAnchorElement>} 
        onClick={(e) => {
          e.preventDefault();
          dropdownPoperShow ? closeDropdownPopper() : openDropdownPopper();
        }}
      >        
        Demo pages
      </a>
      <div
        ref={popperDropdownRef as React.RefObject<HTMLDivElement>} 
        className={ (dropdownPoperShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-[12rem]"}>
        <span className="text-sm pt-2 pb-0 px-4 font-bold w-full whitespace-nowrap text-slate-500">Admin Layout</span>
        <IndexItem url="/admin/dashboard" title="Dashboard" />
        <IndexItem url="/admin/tables" title="Tables" />
        <IndexItem url="/admin/maps" title="Maps" />

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span className="text-sm pt-2 pb-0 px-4 font-bold w-full whitespace-nowrap text-slate-500">Auth Layout</span>
        <IndexItem url="/auth/login" title="Login" />
        <IndexItem url="/auth/register" title="Register" />

        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span className="text-sm pt-2 pb-0 px-4 font-bold w-full whitespace-nowrap text-slate-500">No Layout</span>
        <IndexItem url="/landing" title="Landing" />
        <IndexItem url="/profile" title="profile" />

      </div>
    </>
  );
}