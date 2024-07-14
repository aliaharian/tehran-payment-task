import { ReactNode, UIEventHandler } from "react"

export interface ColumnProps {
    children?: ReactNode;
    title: string;
    onScroll?: UIEventHandler<HTMLDivElement>
    searchValue: string;
    setSearchValue: (value: string) => void;
}