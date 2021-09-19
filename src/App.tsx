import './styles/App.css'
import React, {useEffect, useState} from "react";
import CryptFilter from "./components/CryptFilter";
import {useSearchAndSorted} from "./hook/useSearchAndSorted";
import CryptService from "./API/CryptService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hook/useFetching";
import SortedTable from "./components/SortedTable";
import {ICrypts} from "./types/types";
import Trow from "./components/Trow";
import Select from "./components/UI/Select/Select";
import Thead from "./components/Thead";

const App = () => {
    const [filter, setFilter] = useState({sort: '', search: ''});
    const [limit, setLimit] = useState(5);

    const [crypts, setCrypts] = useState<ICrypts[]>([])
    const sortedAndSearchCrypts: ICrypts[] = useSearchAndSorted(crypts, filter.sort, filter.search);

    const [fetchCrypts, isCryptsLoading, cryptsError] = useFetching(async () => {
        const crypts = await CryptService.getAll(limit);
        setCrypts(crypts.map((data: ICrypts) => ({
            id: data.id,
            name: data.name,
            symbol: data.symbol,
            price: data.quote.USD.price,
            percent_change_24h: data.quote.USD.percent_change_24h,
            percent_change_1h: data.quote.USD.percent_change_1h,
            market_cap: data.quote.USD.market_cap,
            last_updated: data.last_updated
        })))
    })

    useEffect(() => {
        fetchCrypts()
    }, [limit]);

    const tableTitle='Криптовалюты'
    const headTitle = [
        {req: 'name', title: 'Имя'},
        {req: 'symbol', title: 'Символ'},
        {req: '', title: 'Лого'},
        {req: 'price', title: 'Цена в USD'},
        {req: 'percent_change_1h', title: 'Изменения за 1ч'},
        {req: 'percent_change_24h', title: 'Изменения за 24ч'},
        {req: 'market_cap', title: 'Капитализация'},
        {req: 'last_updated', title: 'Последнее обновление'}
    ]

    return (
        <div className="App">
            <CryptFilter filter={filter} setFilter={setFilter}/>
            <Select
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Количество валют на странице"
                options={[
                        {value: 1, name: '1'},
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 30, name: '30'},
                    ]}/>

            {cryptsError && <h1>Произошла ошибка
                ${cryptsError} {cryptsError === 'Network Error' ? 'попробуйте установить расширение Moesif CORS' : false} </h1>}
            {isCryptsLoading
                ? <Loader/>
                : <SortedTable
                    tableTitle={tableTitle}
                    tHead={(getClassNamesFor: any, requestSort: any) => <Thead key={tableTitle} headTitle={headTitle} getClassNamesFor={getClassNamesFor} requestSort={requestSort}/>}
                    tBody={(item: ICrypts) => <Trow key={item.id} items={item}/>}
                    items={sortedAndSearchCrypts}
                />
            }
        </div>
    );
}

export default App;
