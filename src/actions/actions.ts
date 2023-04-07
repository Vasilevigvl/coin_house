import {marketAPI} from "../api/coinsMarket";

export const getCoins = (page: number) => {
    try {
        marketAPI.coinsGet(page).then((response) => {
            return {response}
        })
    } catch (e) {
        console.log(e)
    }
}