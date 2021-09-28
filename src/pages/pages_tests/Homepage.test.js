import { render, screen } from '@testing-library/react';
import Homepage from '../Homepage';
import { Provider } from 'react-redux';
import Store from './../../store/configureStore';

test('has the navbar', () => {
    const result = render(
        <Provider store={Store}>
            <Homepage />
        </Provider>);
    const navbar = result.container.querySelector('.navbar_container');
    expect(navbar).toBeInTheDocument();
})

test('has the product card of the hiking shoes', () => {
    render(
        <Provider store={Store}>
            <Homepage />
        </Provider>);
    const title_hiking_shoes = screen.getByText('Chaussures de randonnée');
    const description_hiking_shoes = screen.getByText('La chaussure parfaite pour vos longues randonnées.');
    const price_hiking_shoes = screen.getByText('120€');
    const img_hiking_shoes = screen.getByAltText('Chaussures de randonnée');
    expect(title_hiking_shoes).toBeInTheDocument();
    expect(description_hiking_shoes).toBeInTheDocument();
    expect(price_hiking_shoes).toBeInTheDocument();
    expect(img_hiking_shoes).toHaveAttribute('src', 'robin-ooode-8iZvOp39rzw-unsplash.jpg');
})

test('has the product card of the tent', () => {
    render(
        <Provider store={Store}>
            <Homepage />
        </Provider>);
    const title_tent = screen.getByText('Tente');
    const description_tent = screen.getByText("Simple à monter et résistante au vent, elle vous abritera partout où vous l'emmenez.");
    const price_tent = screen.getByText('250€');
    const img_tent = screen.getByAltText('Tente');
    expect(title_tent).toBeInTheDocument();
    expect(description_tent).toBeInTheDocument();
    expect(price_tent).toBeInTheDocument();
    expect(img_tent).toHaveAttribute('src', 'triston-dunn-gDElF4RMYbY-unsplash.jpg');
})

test('has the product card of the backpack', () => {
    render(
        <Provider store={Store}>
            <Homepage />
        </Provider>);
    const title_backpack = screen.getByText('Sac à dos');
    const description_backpack = screen.getByText("Sa capacité de 50 litres vous permettra d'emmener tout le nécessaire pour vos randonnées.");
    const price_backpack = screen.getByText('80€');
    const img_backpack = screen.getByAltText('Sac à dos');
    expect(title_backpack).toBeInTheDocument();
    expect(description_backpack).toBeInTheDocument();
    expect(price_backpack).toBeInTheDocument();
    expect(img_backpack).toHaveAttribute('src', 's-migaj-0YLVlKSUEag-unsplash.jpg');
})

test('has the footer with legal notices', () => {
    const result = render(
        <Provider store={Store}>
            <Homepage />
        </Provider>);
    const footer_notices = result.container.querySelector('footer');
    expect(footer_notices).toBeInTheDocument();
})