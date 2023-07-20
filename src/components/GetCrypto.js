import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import ShowCrypto from "./ShowCrypto";

function GetCrypto() {

    //Store retreived data here
    const [coinData, setCoinData] = useState([]);
    //Pull coin data from this url
    const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en";

    //Pulls coin data from our API
    useEffect(() => {
        async function getCoins() {
            let response = await axios.get(apiUrl);
            setCoinData(response.data);
            console.log(response.data);
        }
        getCoins()
    }, [])

    return (
        <div className="container">
            {
                coinData.map(function (i, index) {
                    return (
                        <ShowCrypto image={i.image} name={i.name} price={i.current_price} dailyPercentage={i.price_change_percentage_24h} marketCap = {i.market_cap_rank} key={i.id} />
                    )
                })
            }
        </div>
    )
}

export default GetCrypto