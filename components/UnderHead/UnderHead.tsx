import React from "react";
import Search from "./Search";
import Link from "next/link";

const UnderHead: React.FC = () => {
  return (
    <div className=" xl:flex block flex-nowrap items-center justify-between mb-5">
      <div className=" hidden xl:block text-white text-2xl">Product</div>
      <Search />
      <Link
        href={"/order"}
        className=" bg-green-500 py-2 px-4 rounded-xl text-black "
      >
        Go to Cart
      </Link>
    </div>
  );
};

export default UnderHead;
