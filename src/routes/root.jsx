import { Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ScrollRestoration } from 'react-router-dom';

const customTheme = extendTheme({
  fonts: {
    body: 'Roboto,sans-serif',
    heading: 'poppins, serif',
  },
  // styles: {
  //   global: {
  //     body: {
  //       backgroundColor: "#f8fafc"
  //     },
  //   },
  // },
});

export default function Root() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        {/* <ChakraProvider> */}
        <ScrollRestoration />
        <Navbar />
        <Outlet />
        <Footer />
      </ChakraProvider>
    </>
  );
}
