import React, {useEffect, useState} from 'react'

import style from './CoinsTable.module.scss'
import {marketAPI} from "../../../api/coinsMarket";
import {Coin} from "../../../types/coin";
import {usePriceConvert} from "../../../hooks/usePriceConvert";

const totalPages = 5;

const CoinsTable = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [coinsArray, setCoinsArray] = useState<Coin[] | null>(null)
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const paginationButtons = [];
    for (let p = 1; p <= totalPages; p++) {
        paginationButtons.push(
            <div
                key={p}
                className={`${style.paginate_item} ${currentPage === p ? style.current : ""}`}
                onClick={() => setCurrentPage(p)}
            >
                {p}
            </div>
        )
    }

    const { priceConverter } = usePriceConvert()

    useEffect(() => {
        marketAPI.coinsGet(currentPage)
            .then((response) => {
                setLoading(true)
                if (response.status === 200) {
                    setCoinsArray(response.data)
                }})
            .finally(() => setLoading(false))
            .catch(err => setFetchError(err.message))
    }, [currentPage])

    return (
        <div className={style._}>
            <div className={style._wrap}>
                <h2>Markets rangs</h2>
                <div className={style._header}>
                    <div>Coin name</div>
                    <div>Coin price</div>
                    <div>Coin 24h change</div>
                    <div>Coin market cap</div>
                </div>
                <div className={style._list}>
                    {fetchError && <h4 style={{color: 'red'}}>{fetchError}</h4>}
                    {loading && <div>fetching data...</div>}
                    {coinsArray &&
                        coinsArray.map((coin) => {
                            return (
                                <div className={style.coin} key={coin.name}>
                                    <div className={style.coin_name}>
                                        <img src={coin.image}
                                             alt={`coin ${coin.image}`}/>
                                        <span>{coin.name}</span>
                                    </div>
                                    <div className={style.coin_price}>
                                        <span>{priceConverter(coin?.current_price) || 'No'}</span>
                                    </div>
                                    <div className={style.coin_change}>
                                        <span>{coin?.market_cap_change_percentage_24h?.toFixed(2) || 0}%</span>
                                    </div>
                                    <div className={style.coin_cap}>
                                        <span>{priceConverter(coin.market_cap)}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={style.paginate}>
                        {coinsArray && paginationButtons}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinsTable