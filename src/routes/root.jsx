import { Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../components/CommonComponents/Navbar/Navbar';
import Footer from '../components/CommonComponents/Footer/Footer';
import { ScrollRestoration } from 'react-router-dom';

const customTheme = extendTheme({
  fonts: {
    body: 'Lato,sans-serif',
    heading: 'Lato, serif',
  },
});

export default function Root() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <ScrollRestoration />
        <Navbar />
        <Outlet />
        <Footer />
      </ChakraProvider>
    </>
  );
}
