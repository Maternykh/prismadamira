import BuyButton from "@/components/Cart/BuyButton";
import CartArr from "@/components/Cart/CartArr";

import React from "react";

const OrderPage = () => {
  return (
    <article className=" flex flex-col items-center pb-8">
      <CartArr />
      <BuyButton />
    </article>
  );
};

export default OrderPage;
