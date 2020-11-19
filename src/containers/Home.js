import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import "./home.modules.css"
import data from "../data"

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home_products">
                {data.products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            title={product.title}
                            imageLink={product.imageLink}
                            price={product.price}
                            rating={product.rating}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
