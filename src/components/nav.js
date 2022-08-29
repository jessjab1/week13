import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://www.google.com/">Home</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com/">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com/">Settings</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}