import React, { FC } from "react";

const TaskCheckIcon: FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className="w-[24px] h-[24px] border-2 rounded-full"
      style={{ borderColor: color }}
    />
  );
};

export default TaskCheckIcon;
