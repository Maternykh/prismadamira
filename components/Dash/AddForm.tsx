"use client";
import { AddPost } from "@/lib/actions";
import React, { FC, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
const AddForm: FC = () => {
  // interface categoryType {
  //   id: number;
  //   value: string;
  // }
  const [ingredients, setCategsArr] = useState<string[]>([]);
  const [isRender, setisRender] = useState<boolean>(false);
  const [categValue, setCategValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const AddCateg = () => {
    ingredients.push(categValue);
    setisRender(!isRender);
  };

  const AddItem = () => {
    AddPost({ title, desc, image, cost, ingredients, count: "1" });
  };
  return (
    <section className=" mt-2 flex flex-col bg-gray-800 w-min rounded-xl p-2">
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
        onClick={() => AddItem()}
        className=" border-2 border-green-500 rounded-xl p-2 "
      >
        Add Item
      </button>
    </section>
  );
};

export default AddForm;
