import React from "react";
import Logo from "@/components/Logo";
import CreateTaskButton from "@/components/TaskFormButton";
import NoTaskFound from "@/components/misc/NoTaskFound";
import TaskCounter from "@/components/TaskCounter";
import { GET_TODOS } from "@/services/todo";
import TaskLists from "@/components/TaskLists";

const HomePage = async () => {
  const todos = await GET_TODOS();
  return (
    <div>
      <div className="relative">
        <div className="bg-background p-5 min-h-[200px] flex items-center justify-center">
          <Logo />
        </div>
        <CreateTaskButton />
      </div>
      <div className="py-20 px-5 md:px-0 max-w-[736px] mx-auto relative">
        <TaskCounter
          total={todos.data.total}
          completed={todos.data.completed}
        />
        <div>
          {todos.data.total > 0 ? (
            <TaskLists data={todos.data.tasks} />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
