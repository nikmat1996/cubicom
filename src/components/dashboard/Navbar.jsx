import React from 'react'

export default function Navbar() {
    return (
        <div className="nav_wrapper">
            <div className="nav_left_wrapper">
                <div className='line_wrapper'>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div>
                    <img src="logo.svg" alt = " logo" />
                </div>
            </div>

            <div className="nav_right_wrapper">
                <div>
                    <select className="select" >
                        <option value='Location 1'> Location 1</option>
                    </select>
                </div>
                <div>
                    <img src="https://via.placeholder.com/35" />
                </div>
            </div>
        </div>
    )
}
