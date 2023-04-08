import React, {useEffect, useState} from 'react'
import MainLayout from "../../components/layout/MainLayout";
import CoinsTable from "../../components/sections/CoinsTable/CoinsTable";
import CoinTopMarket from "../../components/sections/CoinTopMarket/coinTopMarket";
import {Coin} from "../../types/coin";
import {marketAPI} from "../../api/coinsMarket";

const MainPage = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [coinsArray, setCoinsArray] = useState<Coin[] | null>(null)
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChangeHandler = (page: number) => {
        setCurrentPage(page)
    }

    const topCoins = coinsArray?.slice(0, 5)

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
        <MainLayout>
            <CoinTopMarket coinArray={topCoins || null}/>
            <CoinsTable currentPage={currentPage} coinsArray={coinsArray} loading={loading} fetchError={fetchError} setCurrentPage={onPageChangeHandler}/>
        </MainLayout>
    )
}

export default MainPage