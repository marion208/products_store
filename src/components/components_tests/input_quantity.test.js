import { render, screen } from '@testing-library/react';
import InputQuantity from '../input_quantity';
import { Provider } from 'react-redux';
import Store from './../../store/configureStore';

test('has a button to decrease the quantity', () => {
    const result = render(
        <Provider store={Store}>
            <InputQuantity identifier="tent" />
        </Provider>
    );
    const button_minus = result.container.querySelector('#minus_qty_tent');
    expect(button_minus).toBeInTheDocument();
});

test('has a button to increase the quantity', () => {
    const result = render(
        <Provider store={Store}>
            <InputQuantity identifier="tent" />
        </Provider>
    );
    const button_plus = result.container.querySelector('#plus_qty_tent');
    expect(button_plus).toBeInTheDocument();
});

test('show the quantity on the cart', () => {
    render(
        <Provider store={Store}>
            <InputQuantity qty_buy="12" />
        </Provider>
    );
    const qty_field = screen.getByText('12');
    expect(qty_field).toBeInTheDocument();
});