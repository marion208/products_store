import { connect } from 'react-redux';
import './pages_styles/Homepage.css';
import './../style.css';
import Navbar from '../components/navbar';
import ProductCard from '../components/product_card';
import FooterLegalNotices from '../components/footer_legal_notices';
import React from 'react';

const mapStateToProps = (state) => {
    return state;
}

class Homepage extends React.Component {
    render() {
        const array_products = JSON.parse(JSON.stringify(this.props.saveBuying.products));
        return (
            <div className="Homepage">
                <Navbar />
                <div className="products_container">
                    {Object.keys(array_products).map((product, i) =>
                        <ProductCard key={i} picture={array_products[product]['picture']} description={array_products[product]['description']} title={array_products[product]['title']} price={array_products[product]['price']} qty_buy={array_products[product]['qty_buy']} identifier={array_products[product]['identifier']} id={array_products[product]['id']} />
                    )}
                </div>
                <FooterLegalNotices />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Homepage);
