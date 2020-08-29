import React from 'react'

export default function Table({ data }) {
    console.log(data)
    return (
        <div>
            <div className="heading lonely">FE Performance</div>
            <table>
                <thead>
                    <tr>
                        <td>FE NAME</td>
                        <td>DEL</td>
                        <td>UNDEL</td>
                        <td>NA</td>
                        <td>DELIVERY IN %</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => 
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.del}</td>
                        <td>{item.undel}</td>
                        <td>{item.na}</td>
                        <td className="lastColumn">
                            {item.inPercentage} %
                            <div className="base">
                                <div className="color_top" style={{width : `${item.inPercentage}px`}}></div>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
