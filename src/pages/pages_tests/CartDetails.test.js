import { render, screen } from '@testing-library/react';
import CartDetails from '../CartDetails';
import { Provider } from 'react-redux';
import emptyStore from './../../store//store_for_tests/storeEmptyCart';
import fullStore from './../../store//store_for_tests/storeFullCart';

test('has the navbar', () => {
    const result = render(
        <Provider store={emptyStore}>
            <CartDetails />
        </Provider>);
    const navbar = result.container.querySelector('.navbar_container');
    expect(navbar).toBeInTheDocument();
})

test('has the product card of the hiking shoes when the quantity on the store is more than 0', () => {
    render(
        <Provider store={fullStore}>
            <CartDetails />
        </Provider>);
    const title_hiking_shoes = screen.getByText('Chaussures de randonnée');
    const price_hiking_shoes = screen.getByText('120€');
    const img_hiking_shoes = screen.getByAltText('Chaussures de randonnée');
    expect(title_hiking_shoes).toBeInTheDocument();
    expect(price_hiking_shoes).toBeInTheDocument();
    expect(img_hiking_shoes).toHaveAttribute('src', 'robin-ooode-8iZvOp39rzw-unsplash.jpg');
})

test('has the product card of the tent when the quantity on the store is more than 0', () => {
    render(
        <Provider store={fullStore}>
            <CartDetails />
        </Provider>);
    const title_tent = screen.getByText('Tente');
    const price_tent = screen.getByText('250€');
    const img_tent = screen.getByAltText('Tente');
    expect(title_tent).toBeInTheDocument();
    expect(price_tent).toBeInTheDocument();
    expect(img_tent).toHaveAttribute('src', 'triston-dunn-gDElF4RMYbY-unsplash.jpg');
})

test('has the product card of the backpack when the quantity on the store is more than 0', () => {
    render(
        <Provider store={fullStore}>
            <CartDetails />
        </Provider>);
    const title_backpack = screen.getByText('Sac à dos');
    const price_backpack = screen.getByText('80€');
    const img_backpack = screen.getByAltText('Sac à dos');
    expect(title_backpack).toBeInTheDocument();
    expect(price_backpack).toBeInTheDocument();
    expect(img_backpack).toHaveAttribute('src', 's-migaj-0YLVlKSUEag-unsplash.jpg');
})


test('doesn\'t have the product card of the hiking shoes when the quantity on the store is 0', () => {
    render(
        <Provider store={emptyStore}>
            <CartDetails />
        </Provider>);
    const title_hiking_shoes = screen.queryByText('Chaussures de randonnée');
    const price_hiking_shoes = screen.queryByText('120€');
    const img_hiking_shoes = screen.queryByAltText('Chaussures de randonnée');
    expect(title_hiking_shoes).not.toBeInTheDocument();
    expect(price_hiking_shoes).not.toBeInTheDocument();
    expect(img_hiking_shoes).not.toBeInTheDocument();
})

test('doesn\'t have the product card of the tent when the quantity on the store is 0', () => {
    render(
        <Provider store={emptyStore}>
            <CartDetails />
        </Provider>);
    const title_tent = screen.queryByText('Tente');
    const price_tent = screen.queryByText('250€');
    const img_tent = screen.queryByAltText('Tente');
    expect(title_tent).not.toBeInTheDocument();
    expect(price_tent).not.toBeInTheDocument();
    expect(img_tent).not.toBeInTheDocument();
})

test('doesn\'t have the product card of the backpack when the quantity on the store is 0', () => {
    render(
        <Provider store={emptyStore}>
            <CartDetails />
        </Provider>);
    const title_backpack = screen.queryByText('Sac à dos');
    const price_backpack = screen.queryByText('80€');
    const img_backpack = screen.queryByAltText('Sac à dos');
    expect(title_backpack).not.toBeInTheDocument();
    expect(price_backpack).not.toBeInTheDocument();
    expect(img_backpack).not.toBeInTheDocument();
})

test('has the footer with legal notices', () => {
    const result = render(
        <Provider store={emptyStore}>
            <CartDetails />
        </Provider>);
    const footer_notices = result.container.querySelector('footer');
    expect(footer_notices).toBeInTheDocument();
})