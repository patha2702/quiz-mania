"use client";
import React from "react";
import { BookOpenCheck, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/SidebarProvider";

import UserInfo from "./UserInfo";

interface NavLink {
  id: number;
  icon: React.ReactNode;
	iconOnFocus: React.ReactNode
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    id: 1,
    icon: <LayoutDashboard />,
		iconOnFocus: <LayoutDashboard fill="black" />,
    label: "Dashboard",
    href: "/me",
  },
  {
    id: 2,
    icon: <BookOpenCheck />,
		iconOnFocus: <BookOpenCheck fill="black" />,
    label: "Tests",
    href: "/me/tests",
  },
];


const Sidebar = () => {
  const {isSidebarOpen} = useSidebar()
  const path = usePathname();

  return (
    <div className={cn("py-4 px-6 flex flex-col justify-between items-start rounded-xl border border-gray-300 bg-slate-100", !isSidebarOpen && "hidden")}>
      <div className="w-full flex flex-col items-start justify-start gap-6">
        <Link className="text-3xl font-semibold text-black" href="/me">100x Mania</Link>
        <nav className="w-full">
          <ul className="w-full flex flex-col justify-start gap-2 items-start">
            {navLinks.map((link) => {
              return (
                <li key={link.id} className="w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex justify-start items-center gap-2 p-2 rounded-xl hover:bg-slate-300",
                      path===link.href && "bg-slate-300 font-bold border border-slate-500"
                    )}
                  >
                    {path === link.href ? link.iconOnFocus : link.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <UserInfo />
    </div>
  );
};

export default Sidebar;
