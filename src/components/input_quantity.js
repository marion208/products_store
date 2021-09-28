import React from 'react';
import { connect } from 'react-redux';
import './components_styles/input_quantity.css';
import './../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => {
    return state;
}

class InputQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty_buy: this.props.qty_buy
        };
    }

    __updateBuying(action_type, id_product) {
        if (this.props.saveBuying.products[id_product].qty_buy > 0 || action_type === 'ADD') {
            let action = { type: action_type, id: id_product };
            this.props.dispatch(action);
            this.updateTotalCartQuantity(action_type);
            this.updateTotalCostCart(action_type, id_product);
        }
    };

    updateTotalCartQuantity(action) {
        let oldValue = document.getElementById("sum_qty_cart").textContent;
        switch (action) {
            case 'ADD':
                this.setState(state => ({
                    qty_buy: state.qty_buy += 1
                }));
                document.getElementById("sum_qty_cart").innerHTML = parseInt(oldValue) + 1;
                break;
            case 'REMOVE':
                this.setState(state => ({
                    qty_buy: state.qty_buy -= 1
                }));
                document.getElementById("sum_qty_cart").innerHTML = parseInt(oldValue) - 1;
                break;
            default:
                break;
        }
    }

    updateTotalCostCart(action, id_product) {
        let textOldValue = document.getElementById("total_cost_cart");
        if (typeof (textOldValue) != 'undefined' && textOldValue != null) {
            let oldCost = textOldValue.textContent;
            switch (action) {
                case 'ADD':
                    document.getElementById("total_cost_cart").innerHTML = parseInt(oldCost) + this.props.saveBuying.products[id_product].price;
                    break;
                case 'REMOVE':
                    document.getElementById("total_cost_cart").innerHTML = parseInt(oldCost) - this.props.saveBuying.products[id_product].price;
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <div className="input_quantity">
                <FontAwesomeIcon icon={faMinusSquare} className="icon_input_quantity" id={"minus_qty_" + this.props.identifier} onClick={() => this.__updateBuying('REMOVE', this.props.id)} />
                <p className="qty_in_cart">{this.state.qty_buy}</p>
                <FontAwesomeIcon icon={faPlusSquare} className="icon_input_quantity" id={"plus_qty_" + this.props.identifier} onClick={() => this.__updateBuying('ADD', this.props.id)} />
            </div>
        );
    };
}

export default connect(mapStateToProps)(InputQuantity)