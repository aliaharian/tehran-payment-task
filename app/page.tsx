import { Column } from "@/app/components/column";
import { ProductCard } from "@/app/components/products/productCard";
import { ProductsList } from "@/app/components/products/productsList";
import { UsersList } from "@/app/components/users/usersList";
import { getProducts } from "@/app/services/getProducts";
import { getUsers } from "@/app/services/getUsers";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts()
  const users = await getUsers()
  return (
    <div className="w-full max-w-7xl flex flex-col items-center mx-auto py-8">
      <h1 className="font-bold text-2xl mb-4">Products & Users!</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <ProductsList products={products} />
        <UsersList users={users}/>
      </div>
    </div>
  );
}
