import Link from "next/link";
import React from "react";

const SuccesPage = () => {
  return (
    <div className=" flex items-center flex-col">
      <h1 className=" text-green-500 text-2xl mt-32">Successful purchase!</h1>
      <Link
        href={"/"}
        className=" mt-2 p-2 text-xl bg-green-500 text-black rounded-xl w-min"
      >
        Comeback
      </Link>
    </div>
  );
};

export default SuccesPage;
