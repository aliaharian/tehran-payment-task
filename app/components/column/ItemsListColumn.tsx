import { Column } from "@/app/components/column";
import { perPage } from "@/app/components/products/productsList/constants";
import { useState } from "react";

type ItemWithId = {
    id: number;
};

export function ItemsListColumn<T extends ItemWithId>({
    items,
    searchKey,
    handleClickItem,
    childComponent: ChildComponent,
    title
}: {
    items: T[];
    searchKey: keyof T;
    handleClickItem: (item: number) => void;
    childComponent?: React.ComponentType<{ data: T }>;
    title: string;
}) {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const target = e.currentTarget;
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            if (items.length >= perPage * page) {
                setPage(page + 1);
            }
        }
    };

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    return (
        <Column searchValue={search} setSearchValue={handleSearch} onScroll={handleScroll} title={title}>
            <div className="w-full flex flex-col gap-y-4">
                {items
                    .filter((item) => {
                        const value = item[searchKey];
                        return typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase());
                    })
                    .slice(0, perPage * page)
                    .map((item) => (
                        <div role="button" key={item.id} onClick={() => handleClickItem(item.id)}>
                            {ChildComponent ? <ChildComponent data={item} /> : null}
                        </div>
                    ))}
            </div>
        </Column>
    );
}
