import React from 'react'

import style from './CoinsTable.module.scss';
import {usePriceConvert} from "../../../hooks/usePriceConvert";
import {Coin} from "../../../types/coin";

const totalPages = 5;

interface CoinsTableProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    loading: boolean;
    coinsArray: Coin[] | null;
    fetchError: string | null
}

const CoinsTable = ({currentPage, setCurrentPage, coinsArray, loading, fetchError}: CoinsTableProps) => {

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
                                        <span style={{color: coin?.market_cap_change_percentage_24h < 0 ? "red" : 'green'}}>{coin?.market_cap_change_percentage_24h?.toFixed(2) || 0}%</span>
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