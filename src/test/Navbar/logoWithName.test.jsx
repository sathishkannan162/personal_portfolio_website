import React from 'react';
import { render, screen } from '../test-utils';
import LogoWithName from '../../components/CommonComponents/Navbar/LogoWithName'

describe('LogoWithName', () => {
    it('renders the logo with name and links correctly', () => {
        const logoUrl = 'https://projectimages.netlify.app/website_logo/website_logo.png'
        const name = 'My Website';

        render(
            <LogoWithName Logo={logoUrl} Name={name} />
        );

        const logoLinks = screen.queryAllByRole('link', { name: name });
        logoLinks.forEach((logoLink) => {
            expect(logoLink).toBeInTheDocument();
            expect(logoLink).toHaveAttribute('href', '/');
        })

        const logoImage = screen.getByTestId('site-logo');
        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute('src', logoUrl);
        expect(logoImage).toHaveAttribute('alt', 'Sathish kannan Logo');
        expect(logoImage).toHaveStyle('width: 30px;');
        expect(logoImage).toHaveStyle('height: 30px;');

        const siteNameText = screen.getByTestId('sitename');
        expect(siteNameText).toBeInTheDocument();
        expect(siteNameText).toHaveTextContent(name);
    });
    describe('LogoWithName', () => {
        const testLogo = 'test-logo.png';
        const testName = 'Test Site';

        test('renders correctly', () => {
            const { asFragment } = render(
                    <LogoWithName Logo={testLogo} Name={testName} />
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
