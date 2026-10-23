import Footer from "@/Components/Shared/Footer";
import NavBer from "@/Components/Shared/NavBer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBer />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
