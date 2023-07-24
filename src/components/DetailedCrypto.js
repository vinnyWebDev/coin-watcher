import React from "react";

function DetailedCrypto(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.symbol}</p>
            <p>${props.price}</p>
            <p> Ath ${props.highest}</p>
            <p>Atl ${props.lowest}</p>
            <p>cap ${props.marketCap}</p>
            <p>rank {props.marketRank}</p>
            <img src={props.image}></img>

        </div>
    )
}

export default DetailedCrypto