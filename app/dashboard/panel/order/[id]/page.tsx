import DeleteButton from "@/components/Bubls/DeleteButton";
import Items from "@/components/Bubls/Items";
import { getBubls, getOrder } from "@/lib/actions";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import React, { FC } from "react";

const FullOrderPage: FC<{
  params: InferGetServerSidePropsType<typeof getServerSideProps>;
}> = async ({ params }) => {
  const search = "";
  const order = await getOrder(params.id);
  const items = await getBubls(search);
  if (!!items && !!order) {
    return (
      <article className=" bg-gray-800 p-2 rounded-xl">
        <h1>Telephone: {order?.telephone}</h1>
        <p>Adress: {order?.adress}</p>
        <Items items={items} ids={order?.items} />
        <DeleteButton id={params.id} />
      </article>
    );
  }
};

export default FullOrderPage;
