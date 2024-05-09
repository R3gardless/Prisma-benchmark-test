// eslint.config.js

const parser = require("@typescript-eslint/parser");
const plugin = require("@typescript-eslint/eslint-plugin");  // 'import'를 'require'로 변경합니다.


module.exports = [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: parser,
      globals: {
        node : true,
        jest : true,
      },
    },
    plugins: {
      plugin
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];