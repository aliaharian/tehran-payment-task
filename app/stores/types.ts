import { IProduct } from "@/app/components/products/productsList/types";
import { IUser } from "@/app/components/users/usersList/types";

export interface useProductsStoreProps {
    products: IProduct[];
    selectedProducts: number[];
    setProducts: (products: IProduct[]) => void;
    selectProduct: (productId: number) => void;
    unselectProduct: (productId: number) => void;
}
export interface useUsersStoreProps {
    users: IUser[];
    selectedUser?: number;
    setUsers: (users: IUser[]) => void;
    selectUser: (userId: number) => void;
    
}