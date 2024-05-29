"use client";
import { RootState } from "@/Redux/store";
import { useAppSelector } from "@/types";
import React, { FC } from "react";
import BublComponent from "../Bubls/BublComponent";

const CartArr: FC = () => {
  const bublincart = useAppSelector(
    (state: RootState) => state.cart.bublincart
  );
  if (bublincart.length === 0)
    return <article className=" text-2xl mt-72">There is nothing</article>;
  if (!!bublincart) {
    return (
      <section className={`  grid xl:grid-cols-4 grid-cols-1 gap-2`}>
        {bublincart.map((bubl) => (
          <BublComponent bubl={bubl} key={bubl.id} variant="incart" />
        ))}
      </section>
    );
  }
};

export default CartArr;
