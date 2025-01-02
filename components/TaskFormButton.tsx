import React from "react";
import Image from "next/image";
import plusIcon from "@/public/plus.svg";
import Link from "next/link";

const CreateTaskButton = () => {
  return (
    <div className="absolute bottom-[-25px] left-0 right-0 mx-auto max-w-[736px]">
      <Link
        href="/create"
        className="flex items-center justify-center gap-2 w-full max-w-[90%] mx-auto md:max-w-full btn-primary"
      >
        <span>Create Task</span>
        <Image width={15} height={15} src={plusIcon} alt="Plus" />
      </Link>
    </div>
  );
};

export default CreateTaskButton;
