import React, { Component } from 'react';

const loginPage = props => {
    return (
        <div className="loginBox">
            <div className="loginInputSection">
            <form className="sign-in" action="/main" method="POST">
                 <h1 id="loginHeader">Welcome to SWAP!</h1>
                    <h2>Please Login</h2>
                <p>
            <label htmlFor="login">Username or email</label>
            <input type="text" name="username" placeholder="Username or email" />
                </p>

                <p>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder="Password" />
                </p>

                <p>
            <input type="submit" name="submit" value="Log In" onClick={() =>  {
                                                    console.log(props.loginDisplayTog)
                                                    props.loginDisplayToggle();
                                                    }}
                                                    /> 
                </p>
        </form>
        </div>

        <div className="firstTimeSection">                                          
        <p className="first-time">First Time?</p>

        <p>
        <button className="signupButton" value="Sign up"
                                    onClick={() =>  {props.signupDisplayToggle()}}
                                                    />  
                                                    </p>         
            </div>          
        </div>
    )
};

export default loginPage;