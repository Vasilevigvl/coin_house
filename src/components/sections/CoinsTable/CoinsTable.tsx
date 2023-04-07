import React, {useEffect, useState} from 'react'

import style from './CoinsTable.module.scss'
import {marketAPI} from "../../../api/coinsMarket";
import {Coin} from "../../../types/coin";
import {usePriceConvert} from "../../../hooks/usePriceConvert";

interface CoinsTable {

}

const CoinsTable = () => {
    const [coinsArray, setCoinsArray] = useState<Coin[] | null>(null)

    const { priceConverter } = usePriceConvert()

    useEffect(() => {
        marketAPI.coinsGet(1).then((response) => {
            if (response.status === 200) {
                setCoinsArray(response.data)
            }
        })
    }, [])

    return (
        <div className={style._}>
            <div className={style._wrap}>
                <div className={style._header}>
                    <div>Coin name</div>
                    <div>Coin price</div>
                    <div>Coin 24h change</div>
                    <div>Coin market cap</div>
                </div>
                <div className={style._list}>
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
                                        <span>{priceConverter(coin.current_price)}</span>
                                    </div>
                                    <div className={style.coin_change}>
                                        <span>{coin.market_cap_change_percentage_24h.toFixed(2)}%</span>
                                    </div>
                                    <div className={style.coin_cap}>
                                        <span>{priceConverter(coin.market_cap)}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CoinsTable