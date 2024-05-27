"use client";
import { linkArr } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const Links: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex xl:flex-nowrap flex-wrap">
      {linkArr.map((link, index: number) => (
        <Link href={link.pathLink} key={index}>
          <div
            className={` ${
              link.pathLink === pathname
                ? "bg-gray-700 text-white"
                : " bg-gray-900 text-slate-400"
            } duration-75 xl:hover:-translate-y-1 border-gray-700 mb-2 xl:mb-0 flex border-2 rounded-full p-2 xl:mr-3 mr-1`}
          >
            <div>{link.nameLink}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
};
export default Links;
