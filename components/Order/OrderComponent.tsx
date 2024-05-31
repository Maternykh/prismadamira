import { OrderType } from "@/types";
import Link from "next/link";
import React, { FC } from "react";

const OrderComponent: FC<{ order: OrderType }> = ({ order }) => {
  return (
    <section className=" bg-gray-800 rounded-xl p-2">
      <h1 className=" text-xl">{order.telephone}</h1>
      <p className=" mb-2">{order.adress}</p>
      <Link
        href={"/dashboard/panel/order/" + order.id}
        className=" bg-green-500 text-black py-2 px-10 rounded-xl"
      >
        More
      </Link>
    </section>
  );
};

export default OrderComponent;
