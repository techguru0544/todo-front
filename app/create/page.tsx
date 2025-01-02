import React from "react";
import Logo from "@/components/Logo";
import GoBack from "@/components/misc/GoBack";
import TaskForm from "@/_forms/TaskForm";

const TaskCreatePage = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-background p-5 min-h-[200px] flex items-center justify-center">
          <Logo />
        </div>
      </div>
      <div className="py-16 w-full max-w-[736px] mx-auto">
        <div className="mb-10">
          <GoBack />
        </div>
        <div>
          <TaskForm />
        </div>
      </div>
    </div>
  );
};

export default TaskCreatePage;
