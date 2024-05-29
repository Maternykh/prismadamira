"use client";
import { RootState } from "@/Redux/store";
import { useAppSelector } from "@/types";
import React from "react";
import BublComponent from "../Bubls/BublComponent";

const BuyArr = () => {
  const bublincart = useAppSelector(
    (state: RootState) => state.cart.bublincart
  );
  return (
    <section className=" grid xl:grid-cols-4 grid-cols-1 gap-2">
      {bublincart.map((bubl) => (
        <BublComponent bubl={bubl} key={bubl.id} variant="buy" />
      ))}
    </section>
  );
};

export default BuyArr;
