"use client"
import { Divide } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "./SideBar";
export default function SidebarItem({icon, text, active, alert}:{icon: any, text: any, active: any, alert: any} ){
    const {expanded} = useContext(SidebarContext)
    return(
        <li className={`
            text-black relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer transition-colors group
            ${active ? "bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
        `}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}> {text} </span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
            {
                expanded &&
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6`}>
                    {text}
                </div>
            }
        </li>
    )
}