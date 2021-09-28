import { render, screen } from '@testing-library/react';
import LittleProductCard from '../little_product_card';
import { Provider } from 'react-redux';
import Store from './../../store/configureStore';

test('shows the name of the product', () => {
    render(
        <Provider store={Store}>
            <LittleProductCard title="Tente" />
        </Provider>);
    const name_product = screen.getByText('Tente');
    expect(name_product).toBeInTheDocument();
});

test('shows the price of the product', () => {
    render(
        <Provider store={Store}>
            <LittleProductCard price="250" />
        </Provider>);
    const price_product = screen.getByText('250€');
    expect(price_product).toBeInTheDocument();
});

test('shows a picture of the product', () => {
    render(
        <Provider store={Store}>
            <LittleProductCard picture="./../images/triston-dunn-gDElF4RMYbY-unsplash.jpg" title="Tente" />
        </Provider>);
    const picture_product = screen.getByRole('img');
    expect(picture_product).toHaveAttribute('src', './../images/triston-dunn-gDElF4RMYbY-unsplash.jpg');
    expect(picture_product).toHaveAttribute('alt', 'Tente');
});

test('shows the field for the quantity', () => {
    const result = render(
        <Provider store={Store}>
            <LittleProductCard qty_buy="12" identifier="tent" />
        </Provider>);
    const id_remove_quantity = result.container.querySelector('#minus_qty_tent');
    const id_add_quantity = result.container.querySelector('#plus_qty_tent');
    const input_field = result.container.querySelector('.input_quantity');
    const qty_filed = input_field.querySelector('p');
    expect(id_remove_quantity).toBeInTheDocument();
    expect(id_add_quantity).toBeInTheDocument();
    expect(qty_filed).toHaveTextContent('12');
});