import React from 'react';
import Card from './Card';

export default function CardDeck({ data }) {

    console.log(data)
    return (
        <div>
            <div className="sub_nav" >
                <div className="heading">Dashboard</div> 
                <div className="icons_wrapper">
                    <div className="icons"> <img src="search.svg" alt="search"></img></div>
                    <div className="icons"><img src="calender.png" alt="calender"></img></div>
                    <div className="dates"><p>12/12/2019 - 18/12/2019</p></div>
                </div>
            </div>

            <div className="card_container">
                {data.map(item => <Card data= {item} />)}

            </div>
        </div>
    )
}
