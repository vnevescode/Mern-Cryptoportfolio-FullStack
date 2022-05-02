const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

const coinGeckoAPI = async (paramsCoin) =>{

    let data = await CoinGeckoClient.coins.markets({
        ids: paramsCoin,
        vs_currencies: ['usd'],       
    });
    const newData = data.data;
    console.log(newData);
    return newData;
}

module.exports = coinGeckoAPI;