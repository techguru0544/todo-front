import React from "react";
import Image from "next/image";
import NoTaskImg from "@/public/clipboard.svg";

const NoTaskFound = () => {
  return (
    <div className="border-t border-t-[#333333] mt-5 p-10 min-h-[266px] flex items-center justify-center w-full">
      <div className="text-center">
        <div className="flex items-center justify-center w-full mb-5">
          <Image width={56} height={56} src={NoTaskImg} alt="NoTaskFound" />
        </div>
        <h2 className="text-muted text-[16px] font-bold">
          You don&#39;t have any tasks registered yet.
        </h2>
        <p className="text-muted text-[16px] font-normal mt-5">
          Create tasks and organize your to-do items.
        </p>
      </div>
    </div>
  );
};

export default NoTaskFound;
