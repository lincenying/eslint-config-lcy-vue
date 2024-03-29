module.exports = {
  globals: {
    $: true,
    _: true,
    window: true,
    document: true,
    FormData: true,
    navigator: true,
    process: true,
    __dirname: true
  },
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true
    }
  },
  plugins: ["import", "babel", "vue", "prettier"],
  settings: {
    "import/ignore": [
      "node_modules",
      "\\.(json|css|less|scss|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$",
      "\\.eslintrc"
    ],
    "import/extensions": [".js", ".vue"],
    "import/resolver": {
      node: {
        extensions: [".js", ".json"]
      }
    }
  },
  rules: {
    "accessor-pairs": 2,
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "computed-property-spacing": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    eqeqeq: [2, "smart"],
    "func-style": [
      2,
      "declaration",
      {
        allowArrowFunctions: true
      }
    ],
    indent: [
      2,
      4,
      {
        SwitchCase: 1
      }
    ],
    "max-depth": 2,
    "max-params": [2, 4],
    "new-parens": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-confusing-arrow": 2,
    "no-console": 0,
    "no-div-regex": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty-label": 0,
    "no-empty": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-parens": 0,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-mixed-requires": 2,
    "no-nested-ternary": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-restricted-modules": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [
      1,
      {
        vars: "all",
        args: "after-used"
      }
    ],
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "object-shorthand": 2,
    "operator-assignment": 2,
    "operator-linebreak": 0,
    "prefer-const": 2,
    "prefer-spread": 2,
    radix: 2,
    semi: ["error", "never"],
    "wrap-regex": 2,
    "arrow-parens": [2, "as-needed"],
    "generator-star-spacing": [2, "before"],

    "vue/html-indent": 0,
    "vue/this-in-template": [2, "never"],
    "vue/html-quotes": [
      "error",
      "double"
    ],
    "vue/order-in-components": "error",
    "prettier/prettier": "error"
  }
};
