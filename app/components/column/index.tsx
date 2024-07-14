import { ColumnProps } from "@/app/components/column/types"

export const Column = ({ children, title, onScroll, searchValue, setSearchValue }: ColumnProps) => {
    return (
        <div className="bg-gray-100 border border-gray-300 rounded-md py-4">
            <h2 className="text-center border-b border-gray-300 pb-4 mb-2">
                {title}
            </h2>
            <div className="w-full px-4 py-2 mb-2">
                <div className="bg-white w-full rounded-md px-4 py-2">
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="search..." className="border-none outline-none shadow-none w-full" />
                </div>
            </div>
            <div onScroll={onScroll} className="px-3 max-h-[calc(100vh-210px)] overflow-auto">
                {
                    children
                }
            </div>
        </div>
    )
}