import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
    },
    rules: {
      "prettier/prettier": ["error", {
        "endOfLine": "auto",
        "semi": true,
        "singleQuote": false,
        "printWidth": 80,
        "trailingComma": "es5",
        "tabWidth": 1,
        "bracketSpacing": true
      }],
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "@typescript-eslint/no-empty-object-type": "off",
      "react/no-children-prop": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": [
        "warn",
        { "allow": ["info", "time", "timeEnd"] }
      ]
    },
  },
];

export default eslintConfig;
