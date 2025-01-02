"use server";

import { CREATE_TODO, DELETE_TODO, ITodo, UPDATE_TODO } from "@/services/todo";
import { revalidatePath } from "next/cache";

export const createTask = async (formData: Partial<ITodo>) => {
  const data = await CREATE_TODO(formData);
  if (data.status === 201) {
    revalidatePath("/");
  }
  return data;
};

export const removeTask = async (taskId: string) => {
  const data = await DELETE_TODO(taskId);
  if (data.status === 200) {
    revalidatePath("/");
  }
  return data;
};

export const updateTask = async (
  taskId: string,
  updatedData: Partial<ITodo>,
) => {
  console.log("trigger here");
  const data = await UPDATE_TODO(taskId, updatedData);
  if (data.status === 200) {
    revalidatePath("/");
  }
  return data;
};
