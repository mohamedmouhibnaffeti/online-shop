import { ChevronFirst } from "lucide-react"
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
                <Image src={`https://ui-avatars.com/api/?name=John+Doe&bold=truesize`} height={100} width={100} alt="" className="w-32" />
                </div>

            </nav>
        </div>
    )
}