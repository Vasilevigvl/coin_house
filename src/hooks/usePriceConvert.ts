export const usePriceConvert = () => {
    const priceConverter = (price: number, count = 1, digits = 0) => {
        if (price === undefined) return '';

        const converted = (price * count);

        const options = {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol',
        };

        if (price === 0)
            return new Intl.NumberFormat('us-US', { ...options, minimumFractionDigits: 0 }).format(
                converted
            );

        return new Intl.NumberFormat('us-US', { ...options, minimumFractionDigits: digits }).format(
            converted
        );
    };

    return { priceConverter };
};