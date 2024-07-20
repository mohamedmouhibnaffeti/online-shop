"use client"
import { ChevronFirst, ChevronLast, LogOut } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
export default function Sidebar({children}: {children: any}){
    const [expanded, setExpanded] = useState(false)
    return(
        <div className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r border-gray-300 shadow-sm w-fit">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <Image src={`https://img.logoipsum.com/243.svg`} height={100} width={100} alt="" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                    <button onClick={()=>{setExpanded(curr => !curr)}} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-black">
                        { expanded ? <ChevronFirst /> : <ChevronLast /> }
                    </button>
                </div>
                
                <ul className="flex-1 px-3">
                    {children}
                </ul>

                <div className="border-t border-gray-300 flex p-3">
                    <Image src={`https://ui-avatars.com/api/?name=MN&bold=true&background=ADD8E6&color=4682B4`} height={100} width={100} alt="" className="w-10 h-10 rounded-md" />
                    <div className="flex justify-between items-center w-52 ml-3">
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-full" : "w-0"}`}>
                            <div className="leading-4">
                                <h4 className="font-semibold text-black"> Mouhib Naffeti </h4>
                                <span className="text-xs text-gray-600"> mouhibnaffeti@gmail.com </span>
                            </div>
                        </div>
                        <LogOut className="text-red-500 cursor-pointer hover:text-red-700 transition delay-75 duration-100" />
                    </div>
                </div>

            </nav>
        </div>
    )
}