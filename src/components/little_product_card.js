import './components_styles/little_product_card.css';
import './../style.css';
import InputQuantity from './input_quantity';

function LittleProductCard(props) {
    return (
        <div className="little_card">
            <div className="little_img_content">
                <img className="img_little_product_card" src={props.picture} alt={props.title} />
            </div>
            <div className="little_card_data">
                <div>
                    <p className="little_card_title">{props.title}</p>
                    <p className="little_card_price">{props.price}€</p>
                </div>
                <InputQuantity qty_buy={props.qty_buy} identifier={props.identifier} id={props.id} />
            </div>
        </div>
    );
}

export default LittleProductCard;
