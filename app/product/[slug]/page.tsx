import ImageGallery from "@/app/Components/imageGallery"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import AddToBag from "@/app/Components/AddToBag"
import { DialogComponent } from "@/app/Components/Dialog"

const images = [
    'https://i.ibb.co/mRt0Z4N/divine-walnut.jpg',
    "https://i.ibb.co/WF43G7t/divine-glory.webp",
    "https://i.ibb.co/YDhmp8y/nb-row-beige.png"
]

const description = "Découvrez notre faïence de salle de bain, alliant élégance et accessibilité. Idéale pour apporter une touche de raffinement à votre espace à un prix abordable."

const ProductPage = async ({params}: {params: {slug: string}}) => {
    return (
        <div className="mt-48">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={images} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-300">Faïence</span>
                            <h1 className="text-2xl font-bold text-gray-200 lg:text-3xl">Divine Glory</h1>
                        </div>
                        <div className="mb-4 ">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-200 md:text-2xl">100 TND</span>
                                <span className="mb-0.5 text-red-500 line-through">{100 + 28} TND</span>
                            </div>
                            <span className="text-sm text-gray-400">Sans Frais de Transport</span>
                        </div>
                        <div className="mb-6 flex items-center gap-2 text-gray-400">
                            <Truck />
                            <span  className="text-sm">2-4 Jours de Livraison</span>
                        </div>
                        <div className="flex gap-2.5">
                                <AddToBag  currency="TND" description={description} image={images[0]} name={'divine-glory'} price={100} key={1} />
                        </div>
                        <p className="mt-12 text-base text-gray-400 tracking-wide">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage