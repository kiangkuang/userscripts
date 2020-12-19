module.exports = {
  env: {
    browser: true,
    es2021: true,
    greasemonkey: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
  },
};
