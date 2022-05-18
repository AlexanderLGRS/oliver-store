import React from "react";
import './Hero.css';
import { Link } from "react-router-dom";


export default function Hero(props) {
    const goingHandler = () => {
        document.location = '/oliver-store/products'
    }
    return (
        <React.Fragment>
            <section className="masthead" role="img" aria-label="Image Description">
                <h1 className="masthead-title">
                    Here you can find the latest collections for the summer
                </h1>
                <Link className="button" to={`/oliver-store/products`}>
                    <button className="masthead-button" type='button' onClick={goingHandler}>
                        Let's go
                    </button>
                </Link>
            </section>
        </React.Fragment>
    )
}