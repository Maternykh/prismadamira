"use client";
import { RootState } from "@/Redux/store";
import { AddOrder } from "@/lib/actions";
import { useAppSelector } from "@/types";
import React, { FC, useState } from "react";

const Form: FC = () => {
  const [telephone, setTelephone] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const bublincart = useAppSelector(
    (state: RootState) => state.cart.bublincart
  );
  const BuyBubl = () => {
    const ids: string[] = [];
    bublincart.map((el) => {
      if (el.count === "1") {
        ids.push(String(el.id));
      }
      if (Number(el.count) > 1) {
        let index = 0;
        while (index === Number(el.count)) {
          ids.push(String(el.id));
          index++;
        }
      }
    });
    console.log(ids);
    if (!!telephone && !!adress && !!bublincart) {
      AddOrder({ telephone, adress, items: ids });
    }
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
