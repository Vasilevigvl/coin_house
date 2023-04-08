import React from 'react'

import style from './coinTopMarket.module.scss'
import {usePriceConvert} from "../../../hooks/usePriceConvert";

const mockData = {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 28000,
    "market_cap": 541536288686,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 587999840047,
    "total_volume": 8669087746,
    "high_24h": 28196,
    "low_24h": 27881,
    "price_change_24h": 94.24,
    "price_change_percentage_24h": 0.33771,
    "market_cap_change_24h": 1418977518,
    "market_cap_change_percentage_24h": 0.26272,
    "circulating_supply": 19340587,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -59.44661,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 41192.44329,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-04-08T13:06:15.132Z"
}

const CoinTopMarket = () => {

    const {priceConverter} = usePriceConvert()

    return (
        <div className={style._}>
            <div className={style.wrapper}>
                <div className={style.list}>
                    <div className={style.coin}>
                        <div className={style.icon}>
                            <img src={mockData.image} alt=""/>
                        </div>
                        <div>
                            <span>{mockData.name} </span>
                            <span style={{color: mockData.price_change_24h > 0 ? "green" : "red"}}>{priceConverter(mockData.price_change_24h)}</span>
                        </div>
                        <div>
                            <span>{priceConverter(mockData.current_price)}</span>
                        </div>
                    </div>
                    <div className={style.coin}>
                        <div className={style.icon}>
                            <img src={mockData.image} alt=""/>
                        </div>
                        <div>
                            <span>{mockData.name} </span>
                            <span style={{color: mockData.price_change_24h > 0 ? "green" : "red"}}>{priceConverter(mockData.price_change_24h)}</span>
                        </div>
                        <div>
                            <span>{priceConverter(mockData.current_price)}</span>
                        </div>
                    </div>
                    <div className={style.coin}>
                        <div className={style.icon}>
                            <img src={mockData.image} alt=""/>
                        </div>
                        <div>
                            <span>{mockData.name} </span>
                            <span style={{color: mockData.price_change_24h > 0 ? "green" : "red"}}>{priceConverter(mockData.price_change_24h)}</span>
                        </div>
                        <div>
                            <span>{priceConverter(mockData.current_price)}</span>
                        </div>
                    </div>
                    <div className={style.coin}>
                        <div className={style.icon}>
                            <img src={mockData.image} alt=""/>
                        </div>
                        <div>
                            <span>{mockData.name} </span>
                            <span style={{color: mockData.price_change_24h > 0 ? "green" : "red"}}>{priceConverter(mockData.price_change_24h)}</span>
                        </div>
                        <div>
                            <span>{priceConverter(mockData.current_price)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinTopMarket