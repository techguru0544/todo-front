import React, { FC } from "react";
import CheckIcon from "@/public/check.svg";
import Image from "next/image";

const TaskIcon: FC<{ color: string }> = ({ color }) => {
  return (
    <button
      className="w-[24px] h-[24px] flex items-center justify-center  rounded-full"
      style={{ background: color }}
    >
      <Image width={16} height={16} src={CheckIcon} alt="Checked" />
    </button>
  );
};

export default TaskIcon;
