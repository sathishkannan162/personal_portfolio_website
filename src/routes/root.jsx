import { Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ScrollRestoration } from 'react-router-dom';

// const customTheme = extendTheme({
// fonts: {
//   body: 'Arial, sans-serif',
//   heading: 'Georgia, serif',
// },
// styles: {
//   global: {
//     body: {
//       backgroundColor: "#f8fafc"
//     },
//   },
// },
// });

export default function Root() {
  return (
    <>
      <ChakraProvider>
        {/* <ChakraProvider theme={customTheme}> */}
        <ScrollRestoration />
        <Navbar />
        <Outlet />
        <Footer />
      </ChakraProvider>
    </>
  );
}
