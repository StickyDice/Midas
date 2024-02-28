module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["src/features/**/*-dto.ts"],
      rules: {
        camelcase: "off",
      },
    },
    {
      files: ["src/test/**/*.test.ts"],
      rules: {
        "max-classes-per-file": "off",
      },
    },
    {
      files: ["src/app/**/*.stories.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      files: ["src/test/**/*.test.ts"],
      rules: {
        "max-classes-per-file": "off",
      },
    },
    {
      files: ["src/app/generic/components/**/*.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [["~", "./src"]],
        extensions: [".js", ".ts", ".tsx", ".d.ts", ".test.ts", ".json"],
      },
    },
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports", "prettier"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off",
    "import/no-import-module-exports": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-shadow": "off",
    "no-return-await": "off",
    "no-use-before-define": "off",
    "no-empty-function": [
      "error",
      {
        allow: ["constructors"],
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
          },
        ],
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        printWidth: 80,
        tabWidth: 2,
        endOfLine: "auto",
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        arrowParens: "always",
      },
    ],
    "react/button-has-type": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-namespace": "off",
    "no-control-regex": "off",
    "unused-imports/no-unused-imports": "warn",
  },
};
