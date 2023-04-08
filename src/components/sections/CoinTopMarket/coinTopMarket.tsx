import React from 'react'

import style from './coinTopMarket.module.scss'
import {usePriceConvert} from "../../../hooks/usePriceConvert";
import {Coin} from "../../../types/coin";

interface CoinTopMarketProps {
    coinArray: Coin[] | null;
}

const CoinTopMarket = ({coinArray}: CoinTopMarketProps) => {

    const {priceConverter} = usePriceConvert()

    if (!coinArray) return null;

    return (
        <div className={style._}>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h2>Top market coins</h2>
                </div>
                <div className={style.list}>
                    {coinArray &&
                        coinArray.map((coin) => {
                            return (
                                <div className={style.coin}>
                                    <div className={style.icon}>
                                        <img src={coin.image} alt=""/>
                                    </div>
                                    <div>
                                        <span>{coin.name} </span>
                                        <span style={{color: coin.price_change_24h > 0 ? "green" : "red"}}>{priceConverter(coin.price_change_24h)}</span>
                                    </div>
                                    <div>
                                        <span>{priceConverter(coin.current_price)}</span>
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

export default CoinTopMarket