import { api, ApiResponse } from "@/services/api";

export interface ITodo {
  title: string;
  color: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
}
export interface IRTodo {
  tasks: ITodo[];
  completed: number;
  total: number;
}

export const GET_TODO = async (id: string): Promise<ApiResponse<ITodo>> => {
  return await api<ITodo>({
    endpoint: `/tasks/${id}`,
    method: "GET",
  });
};

export const GET_TODOS = async (): Promise<ApiResponse<IRTodo>> => {
  return await api<IRTodo>({
    endpoint: "/tasks",
    method: "GET",
  });
};

export const CREATE_TODO = async (
  data: Partial<ITodo>,
): Promise<ApiResponse<ITodo>> => {
  return await api<ITodo>({
    endpoint: "/tasks",
    data,
    method: "POST",
  });
};

export const DELETE_TODO = async (id: string): Promise<ApiResponse<null>> => {
  return await api<null>({
    endpoint: `/tasks/${id}`,
    method: "DELETE",
  });
};

export const UPDATE_TODO = async (
  id: string,
  data: Partial<ITodo>,
): Promise<ApiResponse<ITodo>> => {
  return await api<ITodo>({
    endpoint: `/tasks/${id}`,
    data,
    method: "PUT",
  });
};
