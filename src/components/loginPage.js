// importing all the components
import React from "react";
import LoginButton from "./login-button";
import Password from "./password";
import Username from "./username";
import NavBar from "./nav";


export default class LoginForm extends React.Component {
    render() {
        return ( 
            <div>
                <NavBar />
                <div className="center">
                    <div className="container">
                        <div className="form-group">
                            <div className="row">
                                
                                <div className="col-md">
                                <Username />
                                </div>
                                <div className="col-md">
                                <Password />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <LoginButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}