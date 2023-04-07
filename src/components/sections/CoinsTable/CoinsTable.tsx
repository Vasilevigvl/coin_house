import React from 'react'

import style from './CoinsTable.module.scss'

interface CoinsTable {

}

const CoinsTable = () => {
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
                    <div className={style.coin}>
                        <div className={style.coin_name}>
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                                 alt="coin icon"/>
                            <span>Bitcoin</span>
                        </div>
                        <div className={style.coin_price}>
                            <span>$1234135.98</span>
                        </div>
                        <div className={style.coin_change}>
                            <span>-0.57%</span>
                        </div>
                        <div className={style.coin_cap}>
                            <span>$81792847918279.90</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinsTable