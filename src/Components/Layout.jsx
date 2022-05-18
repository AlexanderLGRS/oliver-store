import React from "react";
import './Layout.css'

export default function Layout(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/oliver-store">
                        Oliver's Store
                    </a>
                </div>
            </nav>
                {props.children}
        </React.Fragment>
    )
}