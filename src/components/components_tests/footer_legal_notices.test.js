import { render, screen } from '@testing-library/react';
import FooterLegalNotices from '../footer_legal_notices';

test('has a title', () => {
    render(<FooterLegalNotices />);
    const title_footer = screen.getByText('Mentions légales :');
    expect(title_footer).toBeInTheDocument();
});

test('indicates that there is no cookie', () => {
    render(<FooterLegalNotices />);
    const no_cookie_footer = screen.getByText('Ce site ne collecte ni cookie ni donnée personnelle.');
    expect(no_cookie_footer).toBeInTheDocument();
});

test('has a content to mention the host', () => {
    render(<FooterLegalNotices />);
    const no_cookie_footer = screen.getByText('Site hébergé par');
    expect(no_cookie_footer).toBeInTheDocument();
});

test('has the link of the webpage of the host', () => {
    render(<FooterLegalNotices />);
    expect(screen.getByText('IONOS').closest('a')).toHaveAttribute('href', 'https://www.ionos.com/')
});