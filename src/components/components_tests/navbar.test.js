import { render, screen } from '@testing-library/react';
import Navbar from './../navbar';
import { Provider } from 'react-redux';
import Store from './../../store/configureStore';

test('has a title', () => {
    render(
        <Provider store={Store}>
            <Navbar />
        </Provider>);
    const title_navbar = screen.getByText('Shopping en ligne');
    expect(title_navbar).toBeInTheDocument();
})

test('has a shopping cart', () => {
    render(
        <Provider store={Store}>
            <Navbar />
        </Provider>);
    const shopping_cart = screen.getByTestId('link_cart');
    expect(shopping_cart).toBeInTheDocument();
})