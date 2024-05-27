"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TbLineScan } from "react-icons/tb";
const Search: React.FC = () => {
  const [Search, setSearch] = useState<string>("");
  return (
    <div className=" relative xl:w-2/6 w-full mb-5 xl:mb-0">
      <IoSearchSharp className=" absolute top-2 left-2 text-gray-400 text-2xl" />
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={Search}
        type="text"
        className=" xl:pr-32 pr-32 pl-10 w-full bg-slate-950 p-2 text-white rounded-xl border-none outline-none"
        placeholder="Search product..."
      />
      <Link
        href={"?search=" + Search}
        className=" absolute text-white flex top-2 left-64 xl:left-96 border-l-2 pl-2 border-gray-400"
      >
        <TbLineScan className=" text text-green-500 text-2xl mr-2" />
        Scan
      </Link>
    </div>
  );
};

export default Search;
