import { useProductsStoreProps } from "@/app/stores/types";
import { create } from "zustand";



export const useProductsStore = create<useProductsStoreProps>((set) => ({
  products: [],
  selectedProducts: [],
  setProducts: (data) =>
    set((state) => ({
      ...state,
      products: data
    })),
  unselectProduct: (productId) => {
    set((state) => ({
      ...state,
      selectedProducts: [...state.selectedProducts.filter((item) => item !== productId)]
    }))
  },
  selectProduct: (productId: number) => {
    set((state) => ({
      ...state,
      selectedProducts: state.selectedProducts.includes(productId)
        ? state.selectedProducts
        : [productId, ...state.selectedProducts],
    }))
  },

}));
