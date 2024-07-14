import { UserCardProps } from "@/app/components/users/userCard/types"
import Image from "next/image"


export const UserCard = ({ data }: UserCardProps) => {
    return (
        <div className="cursor-pointer hover:shadow-lg transition-all w-full bg-white shadow-sm py-4 px-3 rounded-lg flex items-center gap-x-2">
            <div>
                <p className="max-w-[200px] truncate font-bold">{data.name.firstname} {data.name.lastname}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}