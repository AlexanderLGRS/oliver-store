import React, { useState } from "react";
import './Hero.css'


export default function Hero(props) {
    const goingHandler = () => {
        document.location = '/products'
    }
    return (
        <React.Fragment>
            <section className="masthead" role="img" aria-label="Image Description">
                <h1 className="masthead-title">
                    Here you can find the latest collections for the summer
                </h1>
                <button className="masthead-button" type='button' onClick={goingHandler}>
                    Let's go
                </button>
            </section>
        </React.Fragment>
    )
}