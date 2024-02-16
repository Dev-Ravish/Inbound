import React from "react";
import Navbar from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <main className="px-2">{children}</main>
    </div>
  );
};

export default HomeLayout;
