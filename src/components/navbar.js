import React from 'react';
import { connect } from 'react-redux';
import './components_styles/navbar.css';
import './../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => {
    return state;
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        let sum_qty_cart = 0;
        const array_products = JSON.parse(JSON.stringify(this.props.saveBuying.products));
        Object.keys(array_products).forEach((product) => {
            sum_qty_cart += array_products[product]['qty_buy'];
        });
        this.state = {
            sum_qty: sum_qty_cart
        };
    }

    render() {
        return (
            <div className="navbar_container">
                <header className="navbar">
                    <a href="/">
                        Shopping en ligne
                    </a>
                    <a className="link_cart" data-testid="link_cart" href="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon_cart" />
                        <p id="sum_qty_cart">{this.state.sum_qty}</p>
                    </a>
                </header>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
