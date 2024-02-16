import React from "react";
import Navbar from "./_components/navbar";
import { ModeToggle } from "@/components/mode-toggle";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <ModeToggle/>
      <main className="px-2">{children}</main>
    </div>
  );
};

export default HomeLayout;
