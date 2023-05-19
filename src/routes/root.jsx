import { Outlet, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from '../App';
import Navbar from '../Navbar';
export default function Root() {
  return (
    <ChakraProvider>
      <Navbar />
      <Outlet />
    </ChakraProvider>
  );
}
