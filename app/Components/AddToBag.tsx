"use client"
import { Button } from "@/components/ui/button"

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any
}

const AddToBag = ({name, currency, description, price, image}: ProductCart) => {
    const Product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: image,
        id: ''
    }
    return(
        <Button>Ajouter au Panier</Button>
    )
}

export default AddToBag