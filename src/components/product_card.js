import './components_styles/product_card.css';
import './../style.css';
import InputQuantity from './input_quantity';

function ProductCard(props) {
    return (
        <div className="card">
            <div className="img_content">
                <img className="img_product_card" src={props.picture} alt={props.title} />
                <p className="card_description">{props.description}</p>
            </div>
            <div className="card_data">
                <div>
                    <p className="card_title">{props.title}</p>
                    <p className="card_price">{props.price}€</p>
                </div>
                <InputQuantity qty_buy={props.qty_buy} identifier={props.identifier} id={props.id} />
            </div>
        </div>
    );
}

export default ProductCard;
