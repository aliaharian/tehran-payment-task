"use client"

import { IUser } from "@/app/components/users/usersList/types";
import { useUsersStore } from "@/app/stores/useUsersStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const router = useRouter();
    const { selectedUser, users } = useUsersStore()
    const [userInfo, setUserInfo] = useState<IUser>()
    useEffect(() => {
        if (!selectedUser) {
            router.push("/")
        } else {
            const tmp = users.find((user) => user.id === selectedUser)
            if (!tmp) {
                router.push("/")
            } else {
                setUserInfo(tmp)
            }
        }
    }, [])
    return (
        <div className="w-full px-4">
            <div className="max-w-3xl px-4 py-8 my-8 rounded-lg border border-gray-300 mx-auto">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-center font-bold text-3xl">{userInfo?.name.firstname} {userInfo?.name.lastname}</h1>
                    <Link href={"/"} className="block bg-blue-500 text-white px-4 py-2 rounded-md">Go Back</Link>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
                    {
                        userInfo &&
                        <>

                            <p>username: {userInfo.username}</p>
                            <p>email: {userInfo.email}</p>
                            <p>city: {userInfo.address.city}</p>
                            <p>address: {userInfo.address.street}, {userInfo.address.number}</p>
                            <p>zip code: {userInfo.address.zipcode}</p>
                            <p>phone: {userInfo.phone}</p>


                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserDetails;