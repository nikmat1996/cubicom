import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../redux/authReducer/action';
import { Redirect, Link } from 'react-router-dom';


export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: ""
        }
    }

    handleClick = e => {
        e.preventDefault()
        let { email, password } = this.state
        if(email && password !== ""){
            this.props.loginRequest(this.state)
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    render() {
        if(this.props.isAuth)
            return <Redirect to='/dashboard' />
        else
        return (
            <div className="login-wrapper">
                <div className = "login-div">Welcome to  <img src="logo.svg" alt="logo" /></div>
                <p className="login-p">We make easy for everyone to manage <br/> logistics operation</p>
                <form className="input-form">
                    <section>
                        <label className="email">
                            Name <br />
                            <input onChange={this.handleChange} type="text" name="email" placeholder="Enter email"/>
                        </label>
                        <br />
                        <label className="password">
                            Email
                            <br/>
                            <input onChange={this.handleChange} type="password" name="password"  placeholder="Enter password"/>
                        </label>
                    </section>
                    <button onClick={this.handleClick} className="button" type="button"><Link className="nav-link" to="/dashboard">Login</Link></button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth : state.isAuth
})

const mapDispatchToProps = dispatch => ({
    loginRequest : payload => dispatch(loginRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)