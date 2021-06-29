module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['**/tests/**'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multi-spaces': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/no-deprecated-slot-attribute': 0,
    'vue/no-deprecated-destroyed-lifecycle': 0,
    'vue/no-unused-components': 0,
    'space-before-function-paren': 0,
    'prefer-const': 0,
    'no-extra-boolean-cast': 0,
    'no-prototype-builtins': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    },
  ],
};
