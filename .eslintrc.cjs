const js = require("@eslint/js");
const globals = require("globals");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");
const unusedImports = require("eslint-plugin-unused-imports");

module.exports = tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      "eslint:recommended",
      "plugin:prettier/recommended",
      prettierConfig,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react-hooks/exhaustive-deps": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      curly: "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index", "object", "type"],
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/prefer-default-export": "off",
      "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "const", next: "*" },
        { blankLine: "any", prev: "const", next: "const" },
      ],
    },
  },
);
