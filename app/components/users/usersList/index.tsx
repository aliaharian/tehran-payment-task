"use client"

import { ItemsListColumn } from "@/app/components/column/ItemsListColumn"
import { UserCard } from "@/app/components/users/userCard"
import { IUser, UsersListProps } from "@/app/components/users/usersList/types"

export const UsersList = ({ users }: UsersListProps) => {
    const handleClick = () => { }
    return (
        <ItemsListColumn<IUser>
            childComponent={UserCard}
            searchKey="email"
            title="users list"
            items={users}
            handleClickItem={handleClick}
        />
    )
}