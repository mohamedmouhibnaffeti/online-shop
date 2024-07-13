import Image from "next/image"
import Link from "next/link"
import hero1 from "./Images/hero1.jpg"
import hero2 from "./Images/hero2.jpg"

const Hero = async () => {
    return (
        <section className="mx-auto maw-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mt-36">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-fill flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-6xl">
                        Transformez votre maison.
                    </h1>
                    <p className="max-w-md leading-relaxed text-gray-400 xm:text-lg">
                        Découvrez notre collection sélectionnée pour chaque coin de votre maison, offrant des solutions élégantes à des prix imbattables.
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-slate-400 shadow-lg md:left-16 md:top-12 lg:ml-0">
                        <Image 
                            src={hero1} 
                            alt="Man" 
                            priority
                            className="h-full w-full object-cover object-center"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-slate-400 shadow-lg">
                    <Image 
                        src={hero2} 
                        alt="Man" 
                        className="h-full w-full object-cover object-center"
                        priority
                        width={600}
                        height={400}
                        />
                    </div>
                </div>
            </div>
            <div className=" flex-col items-center justify-between gap-8 md:flex-row">
                    <h1 className="mb-4 text-lg font-bold text-white sm:text-lg md:mb-8 md:text-xl">
                        Nos catégories en tendance
                    </h1>
                <div className="flex h-12 w-[20rem] divide-x overflow-hidden rounded-lg border">
                    <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-300">
                        Parterre
                    </Link>
                    <Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-300">
                        Éclairage
                    </Link>
                    <Link href="/Teens" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-300">
                        Décorations
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero