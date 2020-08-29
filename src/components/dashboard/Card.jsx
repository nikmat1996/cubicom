import React from 'react'

export default function Card({ data }) {
    return (
        <div className="card">
            <div className="layers">
                <div className="number">{data.number}</div>
                <div className="myversion">
                    <img src={data.icon} alt=""/>
                </div>
            </div>
            <div className="layers">
                <div>
                    <div className="head1">{data.heading}</div>
                    <div className="head2">{data.subHead}</div>
                </div>
            </div>
        </div>
    )
}
