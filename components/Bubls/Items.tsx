"use client";
import { BublType } from "@/types";
import React, { FC, useEffect, useState } from "react";
import BublComponent from "./BublComponent";

const Items: FC<{ items: BublType[]; ids: string[] | undefined }> = ({
  items,
  ids,
}) => {
  const [Product, setProduct] = useState<BublType[]>([]);
  console.log(ids);

  if (ids) {
    for (let index = 0; index < ids.length; index++) {
      const element = ids[index];
      const finditem = items.find((obj) => obj.id === element);
      if (!!finditem) Product.push(finditem);
      console.log(Product);
    }
  }
  return (
    <div>
      {Product.map((prod) => (
        <BublComponent key={prod.id} bubl={prod} variant="order" />
      ))}
    </div>
  );
};

export default Items;
