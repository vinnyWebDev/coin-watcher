import React from "react";
import Container from 'react-bootstrap/Container';
import GetCrypto from "./GetCrypto";


function Home() {
    return (
        <div className="container mt-3">
            <GetCrypto></GetCrypto>
        </div>
    )
}

export default Home