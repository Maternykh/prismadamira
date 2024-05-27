"use client";
import { updatePost } from "@/lib/actions";
import { BublType } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateForm = ({ bubl }: { bubl: BublType }) => {
  const [ingredients, setCategsArr] = useState<string[]>([]);
  const [isRender, setisRender] = useState<boolean>(false);
  const [categValue, setCategValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    setCategsArr(bubl.ingredients);
    setTitle(bubl.title);
    setImage(bubl.image);
    setCost(bubl.cost);
    setDesc(bubl.desc);
  }, []);
  const AddCateg = () => {
    ingredients.push(categValue);
    setisRender(!isRender);
  };
  const UpdateBubl = () => {
    updatePost({ id: bubl.id, title, desc, image, cost, ingredients });

    setisRender(!isRender);
  };
  return (
    <section className="flex flex-col bg-gray-800 w-min rounded-xl p-2">
      <h1 className=" mb-2 text-xl">Add Item</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="title"
        className=" mb-2 w-64 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="text"
        placeholder="image"
        className=" mb-2 w-96 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
      />
      <input
        onChange={(e) => setCost(e.target.value)}
        value={cost}
        type="text"
        placeholder="cost"
        className=" mb-2 w-52 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
      />
      <textarea
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        placeholder="desc"
        className=" mb-2 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
      ></textarea>
      <div className=" flex mb-2">
        <input
          onChange={(e) => setCategValue(e.target.value)}
          value={categValue}
          type="text"
          placeholder="Ingredients"
          className=" mr-2 w-52 p-2 rounded-xl bg-gray-800 border-2 border-green-500 outline-none"
        />
        <button
          onClick={() => AddCateg()}
          className=" bg-green-500 rounded-xl p-2  w-40 text-black"
        >
          Add
        </button>
      </div>
      <div className=" flex flex-wrap">
        {ingredients.map((categ, i) => (
          <div
            key={i}
            className=" flex items-center justify-between min-w-40 border-2 border-green-500 rounded-xl p-2 mr-2 mb-2 "
          >
            <p>{categ}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCategsArr([])}
        className=" bg-red-500 p-2 rounded-xl text-white mb-2"
      >
        Clear ingridients
      </button>
      <button
        onClick={() => UpdateBubl()}
        className=" border-2 border-green-500 rounded-xl p-2 "
      >
        Update Item
      </button>
    </section>
  );
};

export default UpdateForm;
