"use client"
import { createContext, useContext, useState } from "react";
import React from "react";

interface SideBarContextProps {
    isSidebarOpen: boolean,
    toggleSidebar: ()=>void
}

const SidebarContext = createContext<SideBarContextProps | undefined>(undefined)

export const SidebarProvider = ({children}: {children: React.ReactNode}) => {
    const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(true)
    const toggleSidebar = () => {
        setisSidebarOpen(prev => !prev)
    }
    return (
        <SidebarContext.Provider value={{isSidebarOpen, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) throw new Error("useSidebar must be used within SidebarProvider")
    return context
}