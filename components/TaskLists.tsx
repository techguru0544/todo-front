"use client";

import React, { FC, useState, useTransition } from "react";
import TaskCheckIcon from "@/components/misc/TaskCheckIcon";
import TaskIcon from "@/components/misc/TaskIcon";
import TaskDeleteIcon from "@/components/misc/TaskDeleteIcon";
import { IRTodo, ITodo } from "@/services/todo";
import TaskEditIcon from "@/components/misc/TaskEditIcon";
import { updateTask } from "@/_forms/task.action";

const TaskLists: FC<{ data: IRTodo["tasks"] }> = ({ data }) => {
  const [tasks, setTasks] = useState(data);
  const [pending, startTransition] = useTransition();

  const toggleTaskCompletion = async (
    taskId: string,
    taskData: Partial<ITodo>,
  ) => {
    console.log("pending", pending);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
    startTransition(async () => {
      await updateTask(taskId as string, taskData);
    });
  };

  const handleDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="space-y-4 mt-10">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between gap-5 bg-[#262626] p-5 rounded-lg border border-[#333333] relative"
        >
          <div
            className="flex gap-4 cursor-pointer"
            onClick={() =>
              toggleTaskCompletion(task?.id as string, {
                ...task,
                completed: !task.completed,
              })
            }
          >
            <div className="w-[24px] h-[24px] relative">
              {task.completed ? (
                <TaskIcon color={task.color} />
              ) : (
                <TaskCheckIcon color={task.color} />
              )}
            </div>
            <span
              className={`text-[16px] leading-[1.5] text-light ${
                task.completed && "line-through text-muted"
              }`}
            >
              {task.title}
            </span>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <TaskEditIcon task={task} />
            <TaskDeleteIcon task={task} onDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskLists;
