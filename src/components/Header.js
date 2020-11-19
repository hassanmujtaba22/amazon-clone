import React from 'react'
import { Link } from 'react-router-dom'
import "./header.modules.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../context/StateProvider';

function Header() {
    const [{ basket }] = useStateValue()

    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="Logo" />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" placeholder="Search" type="text" />
                <SearchIcon fontSize="large" className="header_searchIcon" />
            </div>

            <div className="header_navLinks">
                <Link className="header_link" to="login">
                    <dev className="header_option">
                        <span className="header_optionOne">Hello Hassan</span>
                        <span className="header_optionTwo">Sign In</span>
                    </dev>
                </Link>
                <Link className="header_link">
                    <dev className="header_option">
                        <span className="header_optionOne">Return</span>
                        <span className="header_optionTwo">& Orders</span>
                    </dev>
                </Link>
                <Link className="header_link">
                    <dev className="header_option">
                        <span className="header_optionOne">Your</span>
                        <span className="header_optionTwo">Prime</span>
                    </dev>
                </Link>

                <Link className="header_link" to="checkout">
                    <dev className="header_option cart">
                        <ShoppingCartIcon className="header_optionOne cartOne" />
                        <span className="header_optionTwo cartTwo">{basket?.length}</span> 
                        {/* agar varriable difine nh kiya howa hota to ? error se deal kr leta hai */}
                    </dev>
                </Link>
            </div>
        </nav>
    )
}

export default Header
