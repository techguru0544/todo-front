"use client";

import React, { FC } from "react";
import EditIcon from "@/public/edit.svg";
import Image from "next/image";
import { ITodo } from "@/services/todo";
import Link from "next/link";

const TaskEditIcon: FC<{ task: ITodo }> = ({ task }) => {
  return (
    <Link href={`/${task?.id}`} className="flex items-center gap-1 justify-end">
      <Image width={14} height={14} src={EditIcon} alt="Delete" />
    </Link>
  );
};

export default TaskEditIcon;
