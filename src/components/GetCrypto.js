import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import ShowCrypto from "./ShowCrypto";

function GetCrypto() {
    const [coinData, setCoinData] = useState([]);

    //Pulls coin data from our API
    useEffect(() => {
        async function getCoins() {
            let response = await axios.get("https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,USDT,BNP,USDC,XRP,ADA,DOGE,SOL,LTC", { headers: { "X-CoinAPI-Key": "8A61FE8D-FC60-47E8-855A-51DBF67DDD82" } })
            setCoinData(response.data);
            console.log(coinData);
        }

        getCoins()
    }, [])

    return (
        <div className="container">
            <h1>Coins</h1>
            {
                
            }
        </div>
    )
}

export default GetCrypto