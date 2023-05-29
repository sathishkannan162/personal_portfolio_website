// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 0,
  },
  globals: {
    // global variables for e2e testign with cypress
    cy: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    Cypress: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    context: 'readonly',
    expect: 'readonly',
    before: 'readonly',
    after: 'readonly',
  },
};
