import { IProduct } from "@/app/components/products/productsList/types";

export interface useProductsStoreProps {
    products: IProduct[];
    selectedProducts: number[];
    setProducts: (products: IProduct[]) => void;
    selectProduct: (productId: number) => void;
    unselectProduct: (productId: number) => void;
}