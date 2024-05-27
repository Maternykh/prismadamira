import { getBubls } from "@/lib/actions";
import React, { FC } from "react";
import BublComponent from "./BublComponent";

const AllBubl: FC<{ search: string | undefined }> = async ({ search }) => {
  const bubls = await getBubls(search);
  if (bubls?.length === 0) {
    return <section>There is nothing</section>;
  } else
    return (
      <main className=" p-2 grid grid-cols-4 gap-2">
        {bubls?.map((bubl) => (
          <BublComponent bubl={bubl} key={bubl.id} variant="base" />
        ))}
      </main>
    );
};

export default AllBubl;
