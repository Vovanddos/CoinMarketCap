import {useMemo} from "react";

export const useSorted = (items: any[], sort: string) => {
    return useMemo(() => {
        if (sort) return [...items].sort((a, b) => a[sort].localeCompare(b[sort]))
        return items
    }, [sort, items]);
}

export const useSearchAndSorted = (items: any[], sort: string, search: string) => {
    const sortedCrypts = useSorted(items, sort)
    return useMemo(() => {
        return sortedCrypts.filter((items: any) => items.name.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedCrypts])
}