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
            e.preventDefault();
            let response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" + query + "&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            setCoinData(response.data);
            console.log(coinData)
        }
   

    return (
        <div className="container">
            <form onSubmit={searchCoins}>
                <InputGroup>
                    <Form.Control onChange={handleSearchQuery} onSubmit={searchCoins} placeholder="Search crypto"></Form.Control>
                </InputGroup>
            </form>
            {
                coinData.map(function(i, index){
                    <DetailedCrypto></DetailedCrypto>
                })
            }
        </div>
    )
}

export default SearchCrypto