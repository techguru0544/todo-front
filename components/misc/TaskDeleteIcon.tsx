"use client";

import React, { FC, useState, useTransition } from "react";
import TrashIcon from "@/public/trash.svg";
import Image from "next/image";
import { ITodo } from "@/services/todo";
import { removeTask } from "@/_forms/task.action";

const TaskDeleteIcon: FC<{ task: ITodo; onDelete: (id: string) => void }> = ({
  task,
  onDelete,
}) => {
  const [isPending, startTransition] = useTransition();
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const data = await removeTask(task.id!);
      if (data.status === 200) {
        onDelete(task.id!);
        setTimeout(() => setSuccessMessage(""), 2000);
      }
    });
  };

  return (
    <div className="relative">
      {successMessage && (
        <div className="text-green-500 text-sm mb-2 absolute top-1 right-2">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleDelete}>
        <button
          type="submit"
          className="text-gray-500 hover:text-red-500 w-[24px] h-[24px] flex items-center justify-center"
          disabled={isPending}
        >
          {isPending ? (
            <span>...</span>
          ) : (
            <Image width={14} height={14} src={TrashIcon} alt="Delete" />
          )}
        </button>
      </form>
    </div>
  );
};

export default TaskDeleteIcon;
