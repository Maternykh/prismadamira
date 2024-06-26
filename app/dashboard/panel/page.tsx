import AllBubl from "@/components/Bubls/AllBubl";
import PanelBubl from "@/components/Bubls/PanelBubl";
import AddForm from "@/components/Dash/AddForm";
import Orders from "@/components/Order/Orders";
import { searchProps } from "@/types";
import Link from "next/link";
import React from "react";

const AdminPage = ({ searchParams }: { searchParams?: searchProps }) => {
  const password = "25082021alina";

  if (searchParams?.password === password) {
    return (
      <article>
        <h1 className=" ml-2 text-xl">Assortment:</h1>
        <PanelBubl />
        <AddForm />
        <hr className=" border-green-500 mt-2" />
        <h1 className=" ml-2 text-xl mt-2">Orders:</h1>
        <Orders />
      </article>
    );
  }
};

export default AdminPage;
