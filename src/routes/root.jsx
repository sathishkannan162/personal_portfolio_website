import { Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
    <ChakraProvider>
      {/* <ChakraProvider theme={customTheme}> */}
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}
