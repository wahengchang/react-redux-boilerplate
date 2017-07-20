module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true
    }
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": "off",
    "for-direction": "error",
    "getter-return": [
      "error",
      {
          allowImplicit: false
      }
    ],
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": [
      "error",
      "except-parens"
    ],
    "no-constant-condition": [
      "error",
      {
          checkLoops: false
      }
    ],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: false
      }
    ],
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": [
      "error",
      "all",
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: "multi-line",
        enforceForArrowConditionals: false
      }
    ],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "error",
      {    
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": [
      "error",
      {
        max: 5
      }
    ],
    "curly": [
      "error",
      "all"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "guard-for-in": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-empty-function": [
      "error",
      {
        allow: [
          "functions",
          "arrowFunctions"
        ]
      }
    ],
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [
          -1,
          0,
          1,
          2,
          3,
          100
        ],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: false,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "error",
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "radix": "error",
    "require-await": "error",
    "wrap-iife": [
      "error",
      "outside",
      {
        functionPrototypeMethods: true
      }
    ],
    "yoda": [
      "error",
      "never",
      {
        exceptRange: false,
        onlyEquality: false
      }
    ],
    "strict": [
      "error",
      "never"
    ],
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "functions"
      }
    ],
    "no-shadow-restricted-names": "error",
    "no-undef": [
      "error",
      {
        typeof: false
      }
    ],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "[S|s]tyle",
        vars: "all",
        args: "none",
        caughtErrors: "none"
      }
    ],
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true
      }
    ],
    // "global-require": "error",
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "array-bracket-newline": [
      "error",
      {
        multiline: true,
        minItems: null
      }
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: false
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "func-name-matching": [
      "error",
      "always",
      {
        includeCommonJSModuleExports: false
      }
    ],
    "indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          body: 1,
          parameters: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        flatTernaryExpressions: true
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      }
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "max-depth": [
      "error",
      5
    ],
    "max-lines": [
      "error",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-nested-callbacks": [
      "error",
      3
    ],
    "max-params": [
      "error",
      7
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 3,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    "no-new-object": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": [
      "error",
      "beside",
      {
        overrides: {
          while: "below"
        }
      }
    ],
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        consistent: true
      }
    ],
    // "object-curly-spacing": [
    //   "error",
    //   "never",
    //   {
    //     arraysInObjects: false,
    //     objectsInObjects: false
    //   }
    // ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // "semi": [
    //   "error",
    //   "always",
    //   {
    //     omitLastInOneLineBlock: true
    //   }
    // ],
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    // "space-before-function-paren": [
    //   "error",
    //   {
    //     anonymous: "never",
    //     named: "never",
    //     asyncArrow: "always"
    //   }
    // ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false
      }
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: [
          "*"
        ]
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false
      }
    ],
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "constructor-super": "error",
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    // "object-shorthand": [
    //   "error",
    //   "always",
    //   {
    //     avoidQuotes: true,
    //     ignoreConstructors: false,
    //     avoidExplicitReturnArrows: true
    //   }
    // ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "require-yield": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "symbol-description": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "yield-star-spacing": [
      "error",
      "after"
    ]
  }
}