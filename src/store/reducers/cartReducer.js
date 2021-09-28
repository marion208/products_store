import hikingShoesPicture from './../../images/robin-ooode-8iZvOp39rzw-unsplash.jpg';
import tentPicture from './../../images/triston-dunn-gDElF4RMYbY-unsplash.jpg';
import backpackPicture from './../../images/s-migaj-0YLVlKSUEag-unsplash.jpg';

const initialState = {
    products: [
        {
            id: 0,
            title: 'Chaussures de randonnée',
            description: 'La chaussure parfaite pour vos longues randonnées.',
            price: 120,
            picture: hikingShoesPicture,
            qty_buy: 0,
            identifier: 'hkshoes'
        },
        {
            id: 1,
            title: 'Tente',
            description: "Simple à monter et résistante au vent, elle vous abritera partout où vous l'emmenez.",
            price: 250,
            picture: tentPicture,
            qty_buy: 0,
            identifier: 'tent'
        },
        {
            id: 2,
            title: 'Sac à dos',
            description: "Sa capacité de 50 litres vous permettra d'emmener tout le nécessaire pour vos randonnées.",
            price: 80,
            picture: backpackPicture,
            qty_buy: 0,
            identifier: 'backpack'
        }
    ]
}

function saveBuying(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'ADD':
            let productsUpdated = [...state.products];
            let product = { ...productsUpdated[action.id] };
            product.qty_buy += 1;
            productsUpdated[action.id] = product;
            nextState = {
                ...state,
                products: productsUpdated
            };
            return nextState || state;
        case 'REMOVE':
            let products_Updated = [...state.products];
            let one_product = { ...products_Updated[action.id] };
            one_product.qty_buy -= 1;
            products_Updated[action.id] = one_product;
            nextState = {
                ...state,
                products: products_Updated
            };
            return nextState || state;
        default:
            return state;
    }
}

export default saveBuying;