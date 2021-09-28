import { connect } from 'react-redux';
import './pages_styles/CartDetails.css';
import './../style.css';
import Navbar from '../components/navbar';
import LittleProductCard from '../components/little_product_card';
import FooterLegalNotices from '../components/footer_legal_notices';
import React from 'react';

const mapStateToProps = (state) => {
    return state;
}

class CartDetails extends React.Component {
    constructor(props) {
        super(props);
        let sum_cost_cart = 0;
        let array_products_in_cart = JSON.parse(JSON.stringify(this.props.saveBuying.products));
        for (let i = 0; i < array_products_in_cart.length; i++) {
            sum_cost_cart += (array_products_in_cart[i]['qty_buy'] * array_products_in_cart[i]['price']);
            if (array_products_in_cart[i].qty_buy === 0) {
                array_products_in_cart.splice(i, 1);
                i--;
            }
        }
        this.state = {
            sum_cost: sum_cost_cart,
            products_in_cart: array_products_in_cart
        };
    }

    render() {
        return (
            <div className="CartDetailsPage">
                <Navbar />
                <div className="cart_products_container">
                    {Object.keys(this.state.products_in_cart).map((product, i) =>
                        <LittleProductCard key={i} picture={this.state.products_in_cart[product]['picture']} title={this.state.products_in_cart[product]['title']} price={this.state.products_in_cart[product]['price']} qty_buy={this.state.products_in_cart[product]['qty_buy']} identifier={this.state.products_in_cart[product]['identifier']} id={this.state.products_in_cart[product]['id']} />
                    )}
                    <div className="total_cart_container">
                        <p className="text_total_cart">Total : <span id="total_cost_cart">{this.state.sum_cost}</span>€</p>
                    </div>
                </div>
                <FooterLegalNotices />
            </div>
        );
    }

}

export default connect(mapStateToProps)(CartDetails);