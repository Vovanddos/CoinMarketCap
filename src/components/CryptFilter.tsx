import React, {FC} from 'react';
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

interface CryptFilterProps{
    filter:{ search?: string, sort?:string }
    setFilter:(searchOrSort: any)=>any
}

const CryptFilter: FC<CryptFilterProps> =({filter, setFilter})=> {
    return (
        <div>
            {/***************************SELECT SORT***************************/}

            {/*<Select value={filter.sort} onChange={(selectedSort:string[]) => setFilter({...filter, sort: selectedSort})} defaultValue='Сортировка по' options={[*/}
            {/*    {value: 'name', name: 'По имени'},*/}
            {/*    {value: 'symbol', name: 'По символу'},*/}
            {/*    {value: 'last_updated', name: 'Последнее обновление'},*/}
            {/*]}/>*/}
            <Input value={filter.search} onChange={(e:any) => setFilter({...filter, search: e.target.value})} placeholder='Поиск'/>
        </div>
    );
};

export default CryptFilter;
