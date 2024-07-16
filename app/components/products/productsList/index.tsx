"use client"

import { ItemsListColumn } from "@/app/components/column/ItemsListColumn"
import { ProductCard } from "@/app/components/products/productCard"
import { IProduct, ProductsListProps } from "@/app/components/products/productsList/types"
import { useProductsStore } from "@/app/stores/useProductsStore"
import { useEffect } from "react"

export const ProductsList = ({ products }: ProductsListProps) => {
    const { selectedProducts, setProducts, products: storedProducts, selectProduct, unselectProduct } = useProductsStore()

    useEffect(() => {
        setProducts(products)
    }, [])

    const handleSelectProduct = (productId: number) => {
        selectProduct(productId)
    }
    const handleUnselectProduct = (productId: number) => {
        unselectProduct(productId)
    }
    return (
        <>
            <ItemsListColumn<IProduct>
                searchKey="title"
                title="all products"
                childComponent={ProductCard}
                items={storedProducts.filter((item:IProduct) => !selectedProducts.includes(item.id))}
                handleClickItem={handleSelectProduct}
            />
            <ItemsListColumn<IProduct>
                childComponent={ProductCard}
                searchKey="title"
                title="selected products"
                items={storedProducts.filter((item:IProduct) => selectedProducts.includes(item.id))}
                handleClickItem={handleUnselectProduct}
            />
        </>
    )
}