'use client'
import Link from 'next/link'
import Marbilia from './Images/Marbilia.png'
import  Image  from "next/image"
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {ShoppingCart} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
   
import { SearchIcon } from 'lucide-react'
const links = [
    { name : "Home", href : "/" },
    { name : "Men", href : "/Men" },
    { name : "Women", href : "/Women" },
    { name : "Teens", href : "/Teens" }
]

const houseMaterialsCategories: string[] = [
    "Parterre",
    "Articles de toilette",
    "Articles de cuisine",
    "Revêtements de sol",
    "Éclairage",
    "Meubles",
    "Décorations",
    "Rangements",
    "Literie",
    "Rideaux et voilages",
    "Peinture et papiers peints",
    "Plomberie",
    "Électroménager",
    "Jardinage",
    "Sécurité domestique"
  ];
  

const Navbar = () => {
    const pathName = usePathname()
    if(pathName.startsWith("/dashboard")){
        return null
    }
    return (
        <header className="fixed top-0 mb-8 w-full z-40 border-b glassmorphism">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <div className="flex gap-8 justify-between items-center">
                    <Link href="/">
                        <Image src={Marbilia} alt='' width={120} height={120} />
                    </Link>
                    <p className="text-lg font-semibold text-gray-600 transition durtion-100 hover:text-primary cursor-pointer"> Acceuil </p>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-lg font-semibold text-gray-600 transition durtion-100 hover:text-primary">Chercher Catégories</DropdownMenuTrigger>
                        <DropdownMenuContent className="max-h-[300px] overflow-auto scrollbar scrollbar-track-slate-300 scrollbar-thumb-purple-700">
                            <DropdownMenuLabel>Catégories</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {
                                houseMaterialsCategories.map((item, index) => (
                                    <DropdownMenuItem tabIndex={index} className="cursor-pointer"> {item} </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <div className="flex">
                        <input type="text" className="pl-2 py-1 h-fit bg-slate-700/50 outline-none focus:border-r-0 focus:border-2 rounded-l-md focus:border-purple-800" />
                        <button className="p-1 bg-gray-400 rounded-r-md hover:bg-purple-700 transition delay-100 active:bg-purple-800"> <SearchIcon className="w-6" /> </button>
                    </div>
                    <div className="flex divide-x border-r sm:border-l">
                        <Button variant="outline" className="flex bg-inherit flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none border-none" onClick={()=>{}}>
                                <Badge className="rounded-full h-5 w-5 items-center justify-center z-10 fixed translate-x-3 md:-translate-y-5 -translate-y-3 bg-red-800 hover:bg-red-800">{1}</Badge>
                                <ShoppingCart/>
                                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                    Cart
                                </span>
                            </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar

/*

        <header className="fixed top-0 mb-8 w-full z-40 border-b glassmorphism">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <Image src={Marbilia} alt='' width={120} height={120} />
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {
                        links.map((link, id) => (
                            <div key={id}>
                                {pathName === link.href ? (
                                    <Link href={link.href} className="text-lg font-semibold text-primary">{link.name}</Link>
                                ) : (
                                    <Link href={link.href} className="text-lg font-semibold text-gray-600 transition durtion-100 hover:text-primary">{link.name}</Link>
                                )}
                            </div>
                        ))
                    }
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Button variant="outline" className="flex bg-inherit flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none border-none" onClick={()=>{}}>
                            <Badge className="rounded-full h-5 w-5 items-center justify-center z-10 fixed translate-x-3 md:-translate-y-5 -translate-y-3 bg-red-800 hover:bg-red-800">{1}</Badge>
                            <ShoppingCart/>
                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                Cart
                            </span>
                        </Button>
                </div>
            </div>
        </header>

*/