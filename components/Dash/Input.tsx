"use client";
import Link from "next/link";
import React, { useState } from "react";

const Input = () => {
  const [passHash, setPassHash] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="password"
        className=" mt-52 bg-gray-800 border-2 border-green-600 p-2 rounded-xl outline-none"
        onChange={(e) => setPassHash(e.target.value)}
      />
      <Link
        href={"/dashboard/panel/?password=" + passHash}
        className=" bg-green-500 p-3 rounded-xl text-black ml-2"
      >
        Submit
      </Link>
    </div>
  );
};

export default Input;
