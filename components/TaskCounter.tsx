import React, { FC } from "react";

const TaskCounter: FC<{ completed: number; total: number }> = ({
  completed,
  total,
}) => {
  return (
    <div className="relative flex items-center justify-between gap-5">
      <div className="flex items-center justify-center gap-3">
        <span className="text-primary font-bold">Tasks</span>
        <span className="badge badge-light">{total - completed}</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <span className="text-secondary font-bold">Completed</span>
        <span className="badge badge-light">
          {completed} of {total}
        </span>
      </div>
    </div>
  );
};

export default TaskCounter;
