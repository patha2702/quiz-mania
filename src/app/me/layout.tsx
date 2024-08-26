import Sidebar from "@/components/Sidebar";
import React from "react";
import { SidebarProvider } from "@/context/SidebarProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <main className="h-screen max-h-screen grid grid-cols-[20%_80%] bg-slate-50">
        <Sidebar />
        <div>{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
