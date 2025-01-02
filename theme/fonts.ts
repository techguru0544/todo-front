import { Inter as BaseFont } from "next/font/google";

export const baseFont = BaseFont({
  display: "swap",
  preload: true,
  variable: "--base-font",
  weight: ["400", "600", "900"],
});
