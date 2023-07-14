import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import ShowCrypto from "./ShowCrypto";

function GetCrypto() {
    const [coinData, setCoinData] = useState([]);
    //Pull coin data from this url
    const apiUrl ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

    //Pulls coin data from our API
    useEffect(() => {
        async function getCoins() {
            let response = await axios.get(apiUrl);
            setCoinData(response.data);
            console.log(response.data[0]);
        }
        getCoins()
    }, [])

    return (
        <div className="container">
            <h1>Coins</h1>
        </div>
    )
}

export default GetCrypto