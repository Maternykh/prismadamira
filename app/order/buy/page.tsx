import BuyArr from "@/components/Form/BuyArr";
import Form from "@/components/Form/Form";
import React, { FC } from "react";

const BuyPage: FC = () => {
  return (
    <article className="gap-2">
      <Form />
      <BuyArr />
    </article>
  );
};

export default BuyPage;
