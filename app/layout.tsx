import "./globals.css";
import React from "react";
import { baseFont } from "@/theme/fonts";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className={`dark ${baseFont.variable} antialiased`}>
    <body>{children}</body>
  </html>
);
export default RootLayout;
