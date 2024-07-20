import { ChevronFirst, LogOut } from "lucide-react"
import Image from "next/image"
export default function Sidebar({children}: {children: any}){
    return(
        <div className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r border-gray-300 shadow-sm w-fit">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <Image src={`https://img.logoipsum.com/243.svg`} height={100} width={100} alt="" className="w-32" />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-black"> <ChevronFirst /> </button>
                </div>
                
                <ul className="flex-1 px-3">
                    {children}
                </ul>

                <div className="border-t border-gray-300 flex p-3">
                    <Image src={`https://ui-avatars.com/api/?name=MN&bold=true&background=ADD8E6&color=4682B4`} height={100} width={100} alt="" className="w-10 h-10 rounded-md" />
                    <div className="flex justify-between items-center w-52 ml-3">
                        <div className="leading-4">
                            <h4 className="font-semibold text-black"> John Doe </h4>
                            <span className="text-xs text-gray-600"> mouhibnaffeti@gmail.com </span>
                        </div>
                        <LogOut className="text-red-500 cur" />
                    </div>
                </div>

            </nav>
        </div>
    )
}