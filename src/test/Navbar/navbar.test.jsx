import React from 'react';
import { render } from '../test-utils'
import Navbar from '../../components/CommonComponents/Navbar/Navbar';

// Mock the useColorModeValue function
// jest.mock('@chakra-ui/react', () => ({
//   ...jest.requireActual('@chakra-ui/react'),
//   useColorModeValue: jest.fn(),
// }));

describe('Navbar', () => {
    test('renders the navbar correctly', () => {

        const { getByTestId } = render(<Navbar />);

        const header = getByTestId('navbar-header');
        expect(header).toBeInTheDocument();

        const logoWithName = getByTestId('site-logo');
        expect(logoWithName).toBeInTheDocument();

        const sathishKannanLogo = getByTestId('sitename')
        expect(sathishKannanLogo).toBeInTheDocument();

        const navbarBrowser = getByTestId('navbar-browser');
        expect(navbarBrowser).toBeInTheDocument();

        const navbarMobile = getByTestId('navbar-mobile');
        expect(navbarMobile).toBeInTheDocument();
    });
    test('captures and compares component snapshot', () => {
        const { asFragment } = render(<Navbar />);
        expect(asFragment()).toMatchSnapshot();
    });

});
