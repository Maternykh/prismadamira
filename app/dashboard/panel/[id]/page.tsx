import BublComponent from "@/components/Bubls/BublComponent";
import UpdateForm from "@/components/Bubls/UpdateForm";
import { getPost } from "@/lib/actions";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import React, { FC } from "react";

const UpdatePage: FC<{
  params: InferGetServerSidePropsType<typeof getServerSideProps>;
}> = async ({ params }) => {
  const bubl = await getPost(params.id);
  if (bubl)
    return (
      <article className="flex justify-between">
        <section className=" mr-2">
          <UpdateForm bubl={bubl} />
        </section>
        <section className=" w-1/4">
          <BublComponent bubl={bubl} variant="u" />
        </section>
      </article>
    );
};

export default UpdatePage;
