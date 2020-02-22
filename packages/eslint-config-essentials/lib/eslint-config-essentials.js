module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "indent": "off",
    "max-len": ["warn", 150],
    "comma-dangle": [2, "never"],
    "quotes": [
      "error",
      "double",
      { "allowTemplateLiterals": true, "avoidEscape": true },
    ],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "semi": ["error", "always"],
    "space-before-function-paren": "off",
    "prefer-promise-reject-errors": "off",
    "no-console": ["error", { "allow": ["error", "warn"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/default": "off",
    "complexity": ["error", 8],
    "arrow-parens": ["error", "always"],
    "object-curly-spacing": [2, "always", {
      objectsInObjects: false
    }],
    "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
    "quote-props": ["error", "consistent-as-needed"],
    "class-methods-use-this": "off",
    "no-param-reassign": [2, { "props": false }],
    "no-return-assign": ["error", "except-parens"],
    "lines-between-class-members": [
      "warn",
      "always",
      { "exceptAfterSingleLine": true },
    ],
    "accessor-pairs": 2,
    "arrow-spacing": [2, {
      "before": true,
      "after": true
    }],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {
      "allowSingleLine": true
    }]
  }
};
