"use client";
import { clearCart } from "@/Redux/slices/CartSlice";
import { RootState } from "@/Redux/store";
import { AddOrder } from "@/lib/actions";
import { useAppDispatch, useAppSelector } from "@/types";
import { useRouter } from "next/navigation";

import React, { FC, useState } from "react";

const Form: FC = () => {
  const [telephone, setTelephone] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bublincart = useAppSelector(
    (state: RootState) => state.cart.bublincart
  );
  const BuyBubl = () => {
    const ids: string[] = [];
    bublincart.map((el) => {
      ids.push(String(el.id));
    });
    console.log(ids);
    if (!!telephone && !!adress && !!bublincart) {
      AddOrder({ telephone, adress, items: ids });
    }
    router.push("/order/buy/succes");
    dispatch(clearCart());
  };
  return (
    <section className=" flex flex-col mb-2">
      <h1 className=" text-white text-xl mb-2">Fill form:</h1>
      <input
        onChange={(e) => setTelephone(e.target.value)}
        value={telephone}
        type="text"
        placeholder="telephone"
        className=" mb-2 w-64 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
      />
      <input
        onChange={(e) => setAdress(e.target.value)}
        value={adress}
        type="text"
        placeholder="adress"
        className=" w-72 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
      />
      <button
        onClick={() => BuyBubl()}
        className=" bg-green-500 p-2 rounded-xl text-black mt-2 w-48"
      >
        Buy
      </button>
    </section>
  );
};

export default Form;
