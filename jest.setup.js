// import '@testing-library/jest-dom'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/react';

// Configure React Testing Library
configure({ testIdAttribute: 'data-test' });
