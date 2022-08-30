// importing all the components
import React from "react";
import LoginButton from "./login-button";
import Password1 from "./password";
import Username from "./username";
import "../index.css";

export default class LoginForm extends React.Component {
    render() {
        return ( 
            <div className="center">
                <div className="card">
                    <div className="card-body">
                        <h3>Log In</h3>
                        <br></br>
                        <br></br>
                            <Username />
                            <br></br>
                            <Password1 />
                            <br></br>
                            <LoginButton />
                    </div>
                </div>
            </div>
        )    
    }
}