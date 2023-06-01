import React from 'react';
import { getByAltText, render } from '../test-utils'
import { useColorModeValue } from '@chakra-ui/react';
import Navbar from '../../components/CommonComponents/Navbar/Navbar';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

// Mock the useColorModeValue function
// jest.mock('@chakra-ui/react', () => ({
//   ...jest.requireActual('@chakra-ui/react'),
//   useColorModeValue: jest.fn(),
// }));

describe('Navbar', () => {
    test('renders the navbar correctly', () => {
        // Mock the useColorModeValue function to return 'white'
        // useColorModeValue.mockReturnValue('white');

        const { getByTestId, getByText } = render(<Navbar />);

        const header = getByTestId('navbar-header');
        // const formattedHtml = prettier.format(header.innerHTML, {
        //     parser: 'html',
        //     plugins: [parserHtml],
        // });
        // console.log(formattedHtml);
        expect(header).toBeInTheDocument();
        // expect(header).toHaveStyle('background-color: white');

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
