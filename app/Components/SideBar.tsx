import { ChevronFirst } from "lucide-react"
import Image from "next/image"
export default function Sidebar(){
    return(
        <div className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <Image src={`https://img.logoipsum.com/243.svg`} height={100} width={100} alt="" className="w-32" />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"> <ChevronFirst /> </button>
                </div>
            </nav>
        </div>
    )
}