import BuyButton from "@/components/Cart/BuyButton";
import CartArr from "@/components/Cart/CartArr";

import React from "react";

const OrderPage = () => {
  return (
    <article className=" flex flex-col items-center pb-12">
      <CartArr />
      <BuyButton />
    </article>
  );
};

export default OrderPage;
