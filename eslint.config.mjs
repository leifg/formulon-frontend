import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "dist/**/*",
        "coverage/**/*",
        "docs/**/*",
        "jsdoc/**/*",
        "templates/**/*",
        "tmp/**/*",
        "node_modules/**/*",
    ],
}, ...compat.extends("eslint:recommended", "plugin:react/recommended"), {
    plugins: {
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },

        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/prop-types": "off",
        indent: ["error", 2],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        "jsx-quotes": ["error", "prefer-double"],
        semi: ["error", "never"],
        "no-debugger": "warn",
        "no-console": "warn",
    },
}];