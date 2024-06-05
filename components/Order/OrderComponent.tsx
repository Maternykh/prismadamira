import { OrderType } from "@/types";
import Link from "next/link";
import React, { FC } from "react";
import { IoIosMore } from "react-icons/io";

const OrderComponent: FC<{ order: OrderType }> = ({ order }) => {
  return (
    <section className=" bg-gray-800 rounded-xl p-2">
      <h1 className=" text-xl">{order.telephone}</h1>
      <p className=" mb-2">{order.adress}</p>
      <Link
        href={"/dashboard/panel/order/" + order.id}
        className=" flex justify-center pb-2 items-center border-2 border-green-500 text-green-500  w-10 h-10 rounded-xl text-xl"
      >
        ...
      </Link>
    </section>
  );
};

export default OrderComponent;
