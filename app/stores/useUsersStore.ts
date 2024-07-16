import { useUsersStoreProps } from "@/app/stores/types";
import { create } from "zustand";

export const useUsersStore = create<useUsersStoreProps>((set) => ({
  users: [],
  selectedUser: undefined,
  setUsers: (data) =>
    set((state) => ({
      ...state,
      users: data
    })),
  selectUser: (userId: number) => {
    set((state) => ({
      ...state,
      selectedUser: userId
    }))
  }
}));
