import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"


const Newest = async () => {
    let data:any = []
    return (
        <div>
            <div className="mx-auto maw-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-200">Nos nouveaux produits</h1>
                    <Link href="/All" className="text-primary flex items-center gap-x-1 transition delay-100 hover:translate-x-2">
                        Voir Tout<span><ArrowRight /></span>
                    </Link>
                </div>
                <div className="mt-6 grid grid-cols-1 gap gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data?.map((product:any) => {return (
                        <div key={product._id} className="group relative product-glassmorphism rounded-b-md">
                            <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <Image src={product.imageUrl} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                            </div>
                            <div className="mt-4 flex justify-between p-1">
                                <div>
                                    <h3 className="text-sm text-slate-300">
                                        <Link href={`/product/${product.slug}`}>{product.name}</Link>
                                    </h3>
                                    <p className="mt-1 font-bold text-sm text-slate-400">{product.categoryName}</p>
                                </div>
                                <p className="text-sm text-slate-300">{product.price} TND</p>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Newest