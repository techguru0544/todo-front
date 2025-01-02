"use client";
import React from "react";
import { useRouter } from "next/navigation";
import arrowLeft from "@/public/arrow-left.svg";
import Image from "next/image";

const GoBack = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <Image width={24} height={24} src={arrowLeft} alt="GoBack" />
    </button>
  );
};

export default GoBack;
