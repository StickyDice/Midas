module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "@typescript-eslint", "html", "prettier"],
  settings: {
    "react": {
      "version": "detect",
    },
    "import/resolver": {
      "alias": {
        "map": [
          [
            "~",
            "./src"
          ]
        ],
        "extensions": [
          ".js",
          ".ts",
          ".tsx",
          ".d.ts",
          ".test.ts",
          ".json"
        ]
      }
    }
  },
  ignorePatterns: [".eslintrc.cjs", "tailwind.config.js"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "": "never"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "~/**",
            "group": "external"
          }
        ]
      } 
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "off",
    "no-duplicate-imports": "error",
    "no-unreachable-loop": "error",
    "camelcase": "warn",
    "eqeqeq": "warn",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "enum",
        "format": ["UPPER_CASE"]
      }
    ]
  },
}