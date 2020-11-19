import React from 'react'
import { useStateValue } from "../context/StateProvider"

function Product({ id, title, imageLink, rating, price }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                imageLink: imageLink,
                rating: rating,
                price: price
            }
        })
    }
    return (
        <div className="home_product">
            <div className="product_info">
                <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <p className="product_rating">
                    {
                        Array(rating).fill().map((_) => <p>⭐</p>)
                    }
                </p>
            </div>

            <img className="product_image" src={imageLink} alt="productImage" />
            <button onClick={addToBasket} className="product_button">Add to Basket</button>
        </div>
    )
}

export default Product
