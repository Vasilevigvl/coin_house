import {instance} from "./index";

export const marketAPI = {
    coinsGet(page = 1) {
        return instance.get('coins/markets', {params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page,
        }})
    }
}