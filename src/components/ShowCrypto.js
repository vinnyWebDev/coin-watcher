import React from "react";


function ShowCrypto(props) {

    /*

    SHould change colour of percentage value when it is up or down. COme back to it.

    function changeColor() {
        //change colour of percentage value depending if coin si up or down
        if (document.getElementById("dailyPercentage").value < 0.0) {
            document.getElementById("dailyPercentage").style.color = "Red";
        }
        else {
            document.getElementById("dailyPercentage").style.color = "Green";
        }
    }
    */

    return (
        <div className="container mt-2">

            <div className="row  border rounded p-2 mt-4">
                {/*} Had to use inline css on this image, as style would not apply from app.css when image was inside row{*/}
                <img src={props.image} className="col coinImg" alt="logo of a crypto currency" style={{ maxWidth: "70px", maxHeight: "auto" }}></img>
                <p className="col textBold textCenter">{props.name} </p>
                <p className="col textCenter"><span class ="textBold">Price: </span>${props.price}</p>
                <p className="col textCenter"><span class ="textBold">24hr </span>{props.dailyPercentage}%</p>
                <p className="col textCenter"><span class ="textBold">Market Rank: </span>{props.marketCap}</p>
                
            </div>
            <script>changeColor()</script>
        </div>

    )
}


export default ShowCrypto