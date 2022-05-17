import React, { useEffect, useState } from "react";
import './Products.css'
import ProductCard from "../Components/ProductCard";

let products = []
const urlBase = 'https://api.escuelajs.co/api/v1/'

export default function Products(props) {
    const { categories } = props
    const [categoryId, setCaregoryId] = useState(1)
    const [isFetched, setIsFetched] = useState(false)
    const [productsToShow, setProductsToShow] = useState([])

    const selectCategoryHandler = (event) => {
        setCaregoryId(event.target.attributes.value.value);
    }
    useEffect(() => {
        setIsFetched(false)
        fetch(`${urlBase}categories/${categoryId}/products`)
            .then(response => response.json())
            .then(data => {
                products = data;
                setIsFetched(true)
            })
    }, [categoryId])

    useEffect(() => {
        if (isFetched) {
            setProductsToShow(products)
        }
    }, [isFetched])

    return (
        <React.Fragment>
            <div className="category-selector">
                <label htmlFor="listOfCategories">Choose a category:</label>
                <div className="categoriesContainer">
                    {categories.map((category) => (
                        <span className="categoryButton" onClick={selectCategoryHandler} key={Math.random()} value={category.id}>
                            {category.name}
                        </span>
                    ))}
                </div>
            </div>
            <section className="products-section">
                <h1 className="section-title">Our products</h1>
                <div className="cards-container">
                    {productsToShow.map((product) => (
                        <ProductCard title={product.title} description={product.description} image={product.images[2]} key={Math.random()} />
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}