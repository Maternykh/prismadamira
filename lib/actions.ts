"use server";
import { Bubl, BublType } from "@/types";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const getBubls = async (search: string | undefined) => {
  try {
    const bubls = await prisma.bubl.findMany({
      where: {
        title: {
          contains: search,
        },
      },
    });
    return bubls;
  } catch (e) {
    console.log(e);
  }
};
export const AddPost = async ({
  title,
  desc,
  image,
  cost,
  ingredients,
}: {
  title: string;
  desc: string;
  image: string;
  cost: string;
  ingredients: string[];
}) => {
  try {
    const createPost = await prisma.bubl.create({
      data: {
        title,
        desc,
        image,
        cost,
        ingredients,
      },
    });
    revalidatePath("/");
    console.log("added to the database:" + createPost);
  } catch (e) {
    console.log(e);
  }
};
export const deletePost = async (id: string | undefined) => {
  try {
    const deletedPost = await prisma.bubl.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    console.log("deleted from the database:" + deletedPost);
  } catch (e) {
    console.log(e);
  }
};
export const getPost = async (id: string) => {
  try {
    const post = await prisma.bubl.findUnique({
      where: {
        id: id,
      },
    });
    return post;
  } catch (e) {
    console.log(e);
  }
};
export const updatePost = async ({
  id,
  title,
  desc,
  image,
  cost,
  ingredients,
}: {
  id: string | undefined;
  title: string;
  desc: string;
  image: string;
  cost: string;
  ingredients: string[];
}) => {
  try {
    const updatedPost = await prisma.bubl.update({
      where: {
        id: id,
      },
      data: {
        title,
        desc,
        image,
        cost,
        ingredients,
      },
    });
    revalidatePath("/");
    console.log("updated in the database:" + updatedPost);
  } catch (e) {
    console.log(e);
  }
};
export const getOrders = async () => {
  try {
    const order = await prisma.order.findMany({});
    return order;
  } catch (e) {
    console.log(e);
  }
};
export const getOrder = async (id: string) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: id,
      },
    });
    return order;
  } catch (e) {
    console.log(e);
  }
};
export const AddOrder = async ({
  telephone,
  adress,
  items,
}: {
  telephone: string;
  adress: string;
  items: string[];
}) => {
  try {
    const createPost = await prisma.order.create({
      data: {
        telephone,
        adress,
        items,
      },
    });
    revalidatePath("/");
    console.log("added to the database:" + createPost);
  } catch (e) {
    console.log(e);
  }
};
