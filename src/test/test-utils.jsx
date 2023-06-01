import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';
// import {TranslationProvider} from 'my-i18n-lib'

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }) => {
  return (
    <ChakraProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </ChakraProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

// override render method
export { customRender as render };
