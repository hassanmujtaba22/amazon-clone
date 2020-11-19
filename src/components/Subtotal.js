import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./subtotal.modules.css"
import {useStateValue} from "../context/StateProvider"

function Subtotal() {
    const [{ basket }] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat className="subtotal_Card"
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value) => <div>
                    <p className="subtotal_price">
                        Subtotal ({basket.length} item): <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </div>} />
                <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
