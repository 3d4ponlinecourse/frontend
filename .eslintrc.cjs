{
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "unused-imports"],
  "rules": {
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "endOfLine": "auto",
        "semi": false,
        "printWidth": 120
      }
    ],
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error"
  }
}