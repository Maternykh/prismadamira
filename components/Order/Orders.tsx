import { getOrders } from "@/lib/actions";
import React, { FC } from "react";
import OrderComponent from "./OrderComponent";

const Orders: FC = async () => {
  const orders = await getOrders();
  if (orders?.length === 0) {
    return <section>There is nothing</section>;
  } else
    return (
      <main className=" p-2 grid xl:grid-cols-10 grid-cols-2 gap-2">
        {orders?.map((order) => (
          <OrderComponent key={order.id} order={order} />
        ))}
      </main>
    );
};

export default Orders;
