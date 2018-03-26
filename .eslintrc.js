module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: [
    "react",
    "jsx-a11y"
  ],
  // extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },
  rules: {
    // "jsx-a11y/aria-props": 2,
    // "jsx-a11y/heading-has-content": 0,
    // "jsx-a11y/href-no-hash": 2,
    // "jsx-a11y/label-has-for": 2,
    // "jsx-a11y/mouse-events-have-key-events": 2,
    // "jsx-a11y/role-has-required-aria-props": 2,
    // "jsx-a11y/role-supports-aria-props": 2,
    "react/jsx-filename-extension": 0,
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    // 'no-unused-vars': ['warn'],
    'no-console': 0,
    'indent': [2, 2, { 'SwitchCase': 1 }],
  },
};
