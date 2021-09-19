import React, {FC, useEffect, useState} from 'react';
import {useFetching} from "../hook/useFetching";
import CryptService from "../API/CryptService";
import Loader from "./UI/Loader/Loader";
import {ICrypts} from "../types/types";

interface TrProps{
    items:ICrypts
}

const Trow: FC<TrProps> = ({items}) => {

    const [img, setImg] = useState('')

    const [fetchInfo, isInfoLoading, InfoError] = useFetching(async () => {
        const response = await CryptService.getInfo(items.id);
        setImg(response[items.id].logo)

    })

    useEffect(() => fetchInfo(), []);

    return (
        <tr key={items.id}>
            <td>{items.name}</td>
            <td>{items.symbol}</td>
            <td>
                {isInfoLoading
                    ? <Loader small/>
                    : <img src={img} alt=""/>
                }
                {InfoError && <p>Произошла ошибка ${InfoError} при загрузке картинки</p>}
            </td>
            <td>{items.price.toFixed(2)}</td>
            <td>{items.percent_change_1h.toFixed(2)}%</td>
            <td>{items.percent_change_24h.toFixed(2)}%</td>
            <td>{items.market_cap.toFixed(2)}</td>
            <td>{items.last_updated}</td>
        </tr>
    );
};

export default Trow;
