import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
export default function Root() {
  return (
    <ChakraProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}
