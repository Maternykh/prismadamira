"use client";
import { pushToCart, removeFromCart } from "@/Redux/slices/CartSlice";
import { deletePost } from "@/lib/actions";
import { BublType, useAppDispatch } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
const BublComponent: FC<{ bubl: BublType; variant: string }> = ({
  bubl,
  variant,
}) => {
  const [IsOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  const [IsOpenPhoto, setIsOpenPhoto] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  return (
    <article
      className={`${
        variant === "order" ? "border-2 border-green-500 rounded-xl mb-2" : ""
      }`}
    >
      <section className="  bg-gray-800 rounded-xl p-2 ">
        <Image
          onClick={() => setIsOpenPhoto(true)}
          src={bubl.image}
          width={500}
          height={500}
          alt=""
          className=" rounded-xl"
        />
        <h1 className=" text-white text-xl mt-2 mb-2">{bubl.title}</h1>
        <div className=" flex mb-2 gap-2 flex-wrap">
          {bubl.ingredients.map((ingrid, i) => (
            <p
              className=" bg-blue-500 rounded-xl px-1 py-[2px] text-black"
              key={i}
            >
              {ingrid}
            </p>
          ))}
        </div>
        <section className=" border-l-2 border-gray-500 flex pl-5 justify-between">
          <div>
            <p className=" text-gray-500 mb-2">price:</p>
            <p>{bubl.cost}р</p>
          </div>
          <section className=" flex">
            {variant === "base" && (
              <button
                onClick={() => dispatch(pushToCart(bubl))}
                className=" mr-2 hover:bg-green-500 hover:text-black text-white border-2  justify-center flex hover:cursor-pointer border-green-500 xl:w-52 w-28 h-min rounded-xl p-1 mt-3"
              >
                Add to Cart
              </button>
            )}
            {variant === "incart" && (
              <button
                onClick={() => dispatch(removeFromCart(bubl.id))}
                className=" mr-2 hover:bg-green-500 hover:text-black text-white border-2  justify-center flex hover:cursor-pointer border-green-500 w-52 h-min rounded-xl p-1 mt-3"
              >
                Remove from cart
              </button>
            )}
            <button
              onClick={() => setIsOpenDesc(!IsOpenDesc)}
              className={`${
                IsOpenDesc
                  ? " border-green-500 text-white"
                  : "border-gray-500 text-gray-500"
              }  hover:cursor-pointer h-min flex justify-center items-center p-2 rounded-xl border-2 mt-[8px]`}
            >
              <IoIosMore className=" flex justify-center items-center text-2xl" />
            </button>
          </section>
        </section>
        {variant === "panel" && (
          <section className=" flex mt-2">
            <button
              onClick={() => deletePost(bubl.id)}
              className=" mr-2 border-2 border-red-500 rounded-xl p-2 text-red-500"
            >
              <RiDeleteBin2Fill />
            </button>
            <Link
              className=" border-2 border-orange-500 p-2 rounded-xl text-orange-500"
              href={"/dashboard/panel/" + bubl.id}
            >
              <MdEdit />
            </Link>
          </section>
        )}
      </section>
      {IsOpenDesc && (
        <div className=" bg-gray-800 rounded-xl p-2 text-white mt-2">
          {bubl.desc}
        </div>
      )}
      {/* {variant === "buy" && <p>шт: {bubl.count}</p>}
      {variant === "incart" && (
        <div className=" mt-2 flex justify-between items-center">
          <div className=" flex py-2 px-3 rounded-xl border-2 border-green-500">
            <button
              onClick={() => dispatch(dicrimentProd(bubl.id))}
              className=" pr-3 border-r-2 border-green-500"
            >
              -
            </button>
            <p className=" px-3">{bubl.count} шт</p>
            <button
              onClick={() => dispatch(incrementProd(bubl.id))}
              className=" pl-3 border-l-2 border-green-500"
            >
              +
            </button>
          </div>
        </div>
      )} */}
      {IsOpenPhoto && (
        <article className=" fixed z-10 top-0 left-0 w-screen h-screen bg-black  bg-opacity-60">
          <section className=" w-full h-full flex justify-center items-center">
            <Image
              src={bubl.image}
              alt=""
              width={600}
              height={600}
              onClick={() => setIsOpenPhoto(false)}
              className=" opacity-100"
            />
          </section>
        </article>
      )}
    </article>
  );
};

export default BublComponent;
