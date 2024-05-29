"use client";
import { clearCart } from "@/Redux/slices/CartSlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/types";
import Link from "next/link";
import React from "react";

const BuyButton = () => {
  const bublincart = useAppSelector(
    (state: RootState) => state.cart.bublincart
  );
  const dispatch = useAppDispatch();
  if (bublincart.length !== 0) {
    return (
      <section className="fixed flex bottom-2 xl:w-1/2 w-full p-2">
        <Link
          href={"/order/buy"}
          className=" text-center mr-2 hover:bg-green-500 hover:text-black bg-gray-800 border-2 rounded-xl w-full border-green-500 p-2"
        >
          Order {bublincart.length} drinks
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className=" bg-red-500 rounded-xl p-2 w-60 text-white"
        >
          Empty the trash
        </button>
      </section>
    );
  }
};

export default BuyButton;
