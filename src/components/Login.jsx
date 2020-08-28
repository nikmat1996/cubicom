import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className = "login-div">Welcome to  <img src="../utils/logo.svg" alt="logo" /></div>
                <p className="login-p">We make easy for everyone to manage <br/> logistics operation</p>
                <form className="input-form">
                    <section>
                        <label className="email">
                            Name <br />
                            <input type="text" name="email" placeholder="Enter email"/>
                        </label>
                        <br />
                        <label className="password">
                            Email
                            <br/>
                            <input type="password" name="password"  placeholder="Enter password"/>
                        </label>
                    </section>
                    {/* <div className="cache-wrapper">
                        <input type="checkbox" className="rememberme" />
                        <p>Forgot Password?</p>
                    </div> */}
                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        )
    }
}