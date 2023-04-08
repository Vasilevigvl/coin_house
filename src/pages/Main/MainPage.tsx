import React from 'react'
import MainLayout from "../../components/layout/MainLayout";
import CoinsTable from "../../components/sections/CoinsTable/CoinsTable";
import CoinTopMarket from "../../components/sections/CoinTopMarket/coinTopMarket";

const MainPage = () => {
    return (
        <MainLayout>
            <CoinTopMarket />
            <CoinsTable />
        </MainLayout>
    )
}

export default MainPage