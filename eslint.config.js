import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      // Enforce design token usage — no hardcoded hex colors in Tailwind class strings.
      // Use token names: text-brand-navy, bg-thai-gold, from-thai-teal, etc.
      // For programmatic use, import cssVar() from @/lib/colors instead.
      "no-restricted-syntax": [
        "error",
        {
          "selector": "Literal[value=/\\[#[0-9a-fA-F]/]",
          "message": "No hardcoded hex colors in Tailwind classes. Use design token class names (text-brand-navy, bg-thai-gold, etc.) or cssVar() from @/lib/colors for JS contexts."
        }
      ],
    },
  }
);
