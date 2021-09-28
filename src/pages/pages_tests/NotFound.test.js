import { render, screen } from '@testing-library/react';
import NotFound from './../NotFound'

test('has a title', () => {
    render(<NotFound />);
    const title_not_found = screen.getByText('On dirait que vous êtes perdu.');
    expect(title_not_found).toBeInTheDocument();
})

test('has a sub_title', () => {
    render(<NotFound />);
    const sub_title_not_found = screen.getByText('Que souhaitez-vous faire ?');
    expect(sub_title_not_found).toBeInTheDocument();
})

test('has a link to go to the homepage', () => {
    render(<NotFound />);
    expect(screen.getByText('Retourner à la page d\'accueil').closest('a')).toHaveAttribute('href', '/')
})

test('has a link to go to the cart page', () => {
    render(<NotFound />);
    expect(screen.getByText('Accéder aux détails de votre panier').closest('a')).toHaveAttribute('href', '/cart')
})
