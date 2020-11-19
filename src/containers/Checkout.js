import React from 'react'
import Subtotal from '../components/Subtotal'
import "./checkout.modules.css"
import { useStateValue } from "../context/StateProvider"

function Checkout() {
    const [{ basket }] = useStateValue()

    console.log(basket);

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/PrimeDelivery/DEX_2019_Prime_LP_Header_Desktop_3000x600._CB1567810399_.jpg" alt="banner" className="checkout_banner" />

                <div>
                    <h2 className="title">Your shopping Basket</h2>
                    {basket.map(({ imageLink, title, price, rating }) => {
                        return (
                            
                            <div className="checkout_product">
                                <img className="checkout_image" src={imageLink} alt="productImage" />
                                <div className="checkout_info">
                                    <h2 className="checkout_title">{title}</h2>
                                    <p className="checkout_price">
                                        <small>$</small><strong>{price}</strong>
                                    </p>
                                    <p className="checkout_rating">
                                        {
                                            Array(rating).fill().map((_) => <p>⭐</p>)
                                        }
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
