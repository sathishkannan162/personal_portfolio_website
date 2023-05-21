import { Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <meta property="og:title" content="Sathish Kannan Portfolio" />
        <meta
          property="og:description"
          content="My portfolio website showing my projects and my contact informatio"
        />
        <meta
          property="og:image"
          content="https://projectimages.netlify.app/programmer_under_tree.jpeg"
        />
        <meta
          property="og:url"
          content="https://sathishkannanportfolio.netlify.app"
        />
      </Helmet>
      {/* <ChakraProvider theme={customTheme}> */}
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}
