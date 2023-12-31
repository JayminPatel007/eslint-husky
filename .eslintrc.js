module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'array-callback-return': ['error', { checkForEach: true }],
    'no-await-in-loop': ['warn'],
    'no-constant-binary-expression': ['error'],
    'no-constructor-return': ['error'],
    'no-duplicate-imports': ['error'],
    'no-new-native-nonconstructor': ['error'],
    'no-promise-executor-return': [
      'error',
      {
        allowVoid: true,
      },
    ],
    'no-self-compare': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unused-private-class-members': ['error'],
    'no-use-before-define': ['error'],
    'require-atomic-updates': ['error'],
    'arrow-body-style': ['warn'],
    camelcase: ['warn'],
    'class-methods-use-this': ['warn'],
    'consistent-return': ['error'],
    curly: ['error', 'all'],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    eqeqeq: ['error'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'func-names': ['error', 'as-needed'],
    'func-name-matching': ['error'],
    'init-declarations': ['error', 'always'],
    'max-depth': ['error', 3],
    'max-classes-per-file': ['warn', 1],
    'max-lines-per-function': ['warn'],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['warn', 3],
    'max-statements': ['warn', 10],
    'no-alert': ['warn'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-caller': ['error'],
    'no-confusing-arrow': ['error'],
    'no-console': ['warn'],
    'no-continue': ['warn'],
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-label': ['error'],
    'no-floating-decimal': ['error'],
    'no-implied-eval': ['error'],
    'no-implicit-coercion': ['error'],
    'no-invalid-this': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': ['warn', { ignore: [0, 1] }],
    'no-mixed-operators': ['error'],
    'no-multi-assign': ['error'],
    'no-negated-condition': ['warn'],
    'no-nested-ternary': ['warn'],
    'no-new-func': ['warn'],
    'no-new-wrappers': ['error'],
    'no-object-constructor': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-proto': ['error'],
    'no-return-assign': ['error'],
    'no-script-url': ['error'],
    'no-sequences': ['error'],
    'no-shadow': ['error'],
    'no-throw-literal': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unused-expressions': ['error'],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'no-void': ['error'],
    'object-shorthand': ['warn', 'always'],
    'one-var': ['warn'],
    'prefer-arrow-callback': ['error'],
    'prefer-const': ['error'],
    'prefer-destructuring': ['error'],
    'prefer-object-spread': ['error'],
    'prefer-promise-reject-errors': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['warn'],
    'require-await': ['error'],
    yoda: ['error'],
  },
};
