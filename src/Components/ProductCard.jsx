import React from "react";
import './ProductCard.css'

export default function ProductCard(props) {
    const {title, image, description} = props
    return (
        <React.Fragment>
            <div className="card" >
                <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <a  className="btn btn-primary">Add to cart</a>
                    </div>
            </div>
        </React.Fragment>
    )
}