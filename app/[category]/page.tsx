import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
const CategoryPage = async ({params}: {params: {category: string}}) => {
    return (
        <div className="mt-36">
            <div className="mx-auto maw-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-200">Nos Produits pour Faïence</h1>
                </div>
                <div className="mt-6 grid grid-cols-1 gap gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div key={1} className="group relative product-glassmorphism rounded-b-md">
                        <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image src={'https://i.ibb.co/mRt0Z4N/divine-walnut.jpg'} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                            <div>
                                <h3 className="text-sm text-slate-300">
                                    <Link href={`/product/divine-walnut`}> divine-walnut </Link>
                                </h3>
                                <p className="mt-1 font-bold text-sm text-slate-400">{'Faïence'}</p>
                            </div>
                            <p className="text-sm text-slate-300">100 TND/mètre</p>
                        </div>
                    </div>
                    <div key={1} className="group relative product-glassmorphism rounded-b-md">
                        <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image src={"https://i.ibb.co/WF43G7t/divine-glory.webp"} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                            <div>
                                <h3 className="text-sm text-slate-300">
                                    <Link href={`/product/divine-walnut`}> divine-glory </Link>
                                </h3>
                                <p className="mt-1 font-bold text-sm text-slate-400">{'Faïence'}</p>
                            </div>
                            <p className="text-sm text-slate-300">89 TND/mètre</p>
                        </div>
                    </div>
                    <div key={1} className="group relative product-glassmorphism rounded-b-md">
                        <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image src={"https://i.ibb.co/YDhmp8y/nb-row-beige.png"} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                            <div>
                                <h3 className="text-sm text-slate-300">
                                    <Link href={`/product/divine-walnut`}> nb-row-beige </Link>
                                </h3>
                                <p className="mt-1 font-bold text-sm text-slate-400">{'Faïence'}</p>
                            </div>
                            <p className="text-sm text-slate-300">70 TND/mètre</p>
                        </div>
                    </div>
                    <div key={1} className="group relative product-glassmorphism rounded-b-md">
                        <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image src={'https://i.ibb.co/mRt0Z4N/divine-walnut.jpg'} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                            <div>
                                <h3 className="text-sm text-slate-300">
                                    <Link href={`/product/divine-walnut`}> divine-walnut </Link>
                                </h3>
                                <p className="mt-1 font-bold text-sm text-slate-400">{'Faïence'}</p>
                            </div>
                            <p className="text-sm text-slate-300">100 TND/mètre</p>
                        </div>
                    </div>
                    <div key={1} className="group relative product-glassmorphism rounded-b-md">
                        <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image src={"https://i.ibb.co/WF43G7t/divine-glory.webp"} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                            <div>
                                <h3 className="text-sm text-slate-300">
                                    <Link href={`/product/divine-walnut`}> divine-glory </Link>
                                </h3>
                                <p className="mt-1 font-bold text-sm text-slate-400">{'Faïence'}</p>
                            </div>
                            <p className="text-sm text-slate-300">89 TND/mètre</p>
                        </div>
                    </div>
                    <div key={1} className="group relative product-glassmorphism rounded-b-md">
                        <div className="aspect-square w-full overflow-hidden rounded-xl rounded-b-none bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image src={"https://i.ibb.co/YDhmp8y/nb-row-beige.png"} alt="product" className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer" width={300} height={300} />
                        </div>
                        <div className="mt-4 flex justify-between p-2">
                            <div>
                                <h3 className="text-sm text-slate-300">
                                    <Link href={`/product/divine-walnut`}> nb-row-beige </Link>
                                </h3>
                                <p className="mt-1 font-bold text-sm text-slate-400">{'Faïence'}</p>
                            </div>
                            <p className="text-sm text-slate-300">70 TND/mètre</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage