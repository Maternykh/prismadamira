"use client";
import { deleteBubl } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const DeleteButton: FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const onClickDelete = () => {
    deleteBubl(id);
    router.push("/dashboard/panel?password=25082021alina");
  };
  return (
    <button
      onClick={() => onClickDelete()}
      className=" bg-red-500 p-2 rounded-xl text-white"
    >
      Delete this order
    </button>
  );
};

export default DeleteButton;
