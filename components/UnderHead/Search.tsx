"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { TbLineScan } from "react-icons/tb";
const Search: React.FC = () => {
  const [Search, setSearch] = useState<string>("");
  return (
    <div className=" relative xl:w-2/6 w-full mb-5 xl:mb-0">
      <Link
        href={"?search=" + Search}
        className=" absolute top-2 left-2 text-gray-400 text-2xl"
      >
        <IoSearchSharp />
      </Link>

      <input
        onChange={(e) => setSearch(e.target.value)}
        value={Search}
        type="text"
        className=" xl:pr-32 pr-32 pl-10 w-full bg-slate-950 p-2 text-white rounded-xl border-none outline-none"
        placeholder="Search product..."
      />
    </div>
  );
};

export default Search;
