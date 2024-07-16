"use client"

import { ItemsListColumn } from "@/app/components/column/ItemsListColumn"
import { UserCard } from "@/app/components/users/userCard"
import { IUser, UsersListProps } from "@/app/components/users/usersList/types"
import { useUsersStore } from "@/app/stores/useUsersStore"
import { useRouter } from 'next/navigation'
import { useEffect } from "react"

export const UsersList = ({ users }: UsersListProps) => {
    const { users: storedUsers, setUsers, selectUser } = useUsersStore()
    const router = useRouter()

    useEffect(() => {
        setUsers(users)
    }, [])
    const handleClick = (userId: number) => {
        selectUser(userId)
        router.push("/userDetails")
    }
    return (
        <ItemsListColumn<IUser>
            childComponent={UserCard}
            searchKey="email"
            title="users list"
            items={storedUsers}
            handleClickItem={handleClick}
        />
    )
}