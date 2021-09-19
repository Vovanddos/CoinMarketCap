import React from 'react';
import {useSortableData} from "../hook/useSortableData";
import '../styles/App.css'


interface ItemsProps<T> {
    items: T[],
    tableTitle:string,
    tBody: (item: T) => React.ReactNode
    tHead: (getClassNamesFor: (name: string)=>string, requestSort: (key: string) => void) => React.ReactNode
}

export default function SortedTable<T>(props: ItemsProps<T>) {

    const {items, requestSort, sortConfig} = useSortableData(props.items, null);

    const getClassNamesFor = (name: string) => {
        if (!sortConfig) return;
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    if (!props.items.length) return <h1>{props.tableTitle} не найдены</h1>
    return (
        <div>
            <h1>{props.tableTitle}</h1>
            <div className="table-wrapper">
                <table>
                    <thead>
                    {props.tHead(getClassNamesFor, requestSort)}
                    </thead>
                    <tbody>
                    {items.map(props.tBody)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}