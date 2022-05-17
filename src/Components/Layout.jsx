import React from "react";
import logoDark from '../Logo_Dark.png'
import './Layout.css'

export default function Layout(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/home">
                        Oliver's Store
                    </a>
                </div>
            </nav>
                {props.children}
        </React.Fragment>
    )
}