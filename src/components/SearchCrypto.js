import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { InputGroup, Form } from "react-bootstrap";
import DetailedCrypto from "./DetailedCrypto";

function SearchCrypto() {

    const [query, setQuery] = useState("");
    const [coinData, setCoinData] = useState([]);

    function handleSearchQuery(e) {
        e.preventDefault()
        setQuery(e.target.value);
    }

        async function searchCoins(e) {
            console.log("test")
            console.log(query)
            e.preventDefault();
            let response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + query + "&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            console.log(response.data)
            setCoinData(response.data[0]);
            console.log("test2")
           console.log(coinData)
        }
   
        //there's no need to map, you're pulling only one coin. 

    return (
        <div className="container">
            <form onSubmit={searchCoins}>
                <InputGroup>
                    <Form.Control onChange={handleSearchQuery} onSubmit={searchCoins} placeholder="Search crypto"></Form.Control>
                </InputGroup>
            </form>
            <DetailedCrypto name={coinData.name} symbol={coinData.symbol} price={coinData.current_price}
            highest={coinData.ath} lowest={coinData.atl} marketCap={coinData.market_cap} marketRank={coinData.market_cap_rank} image={coinData.image}/>
        </div>
    )
}

export default SearchCrypto