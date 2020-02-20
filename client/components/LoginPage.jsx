import React, { Component } from 'react';

const loginPage = props => {
    return (
        <div className="loginPage">
            <form class="sign-in">
                 <h1 id="loginHeader">Welcome to SWAP!</h1>
                    <h2>Please Login</h2>
                <p>
            <label for="login">Username or email</label>
            <input type="text" name="username" placeholder="Username or email" />
                </p>

                <p>
            <label for="password">Password</label>
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

        <p id="first-time">First Time?</p>

        <p>
        <button className="signupButton" value="Sign-up!"
                                    // onClick={() =>  {
                                    //                 console.log(props.loginDisplayTog)
                                    //                 props.loginDisplayToggle();
                                    //                 }}
                                                    />  
                                                    </p>                                            
        </div>
    )
};

export default loginPage;