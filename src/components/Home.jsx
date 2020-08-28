import React from 'react';
import './home.css'
import Login from './Login';

export default function Home() {
    return (
        <div className="container">
            <div className="home-container">
                <div className="login">
                    <Login />
                </div>
            </div>
        </div>
    )
}
