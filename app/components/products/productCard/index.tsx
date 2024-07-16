import { ProductCardProps } from "@/app/components/products/productCard/types"
import Image from "next/image"


export const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <div className="cursor-pointer hover:shadow-lg transition-all w-full bg-white shadow-sm py-4 px-3 rounded-lg flex items-center gap-x-2">
            <div className="relative w-16 h-16 rounded-full">
                <Image
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                    src={data.image}
                    alt="product"
                    fill
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div>
                <p className="max-w-[200px] truncate font-bold">{data.title}</p>
                <p>price: ${data.price}</p>
            </div>
        </div>
    )
}