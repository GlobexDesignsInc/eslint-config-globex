module.exports = {
  env: {
		jest: true,
	},
  plugins: [
		'jest'
	],
  rules: {
    // ERRORS

    'jest/consistent-test-it': ['error', {fn: 'it'}],
    'jest/expect-expect': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-expect-resolves': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-callback': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-try-expect': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-title': 'error',

    // WARNINGS

    'jest/no-commented-out-tests': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-large-snapshots': 'warn',
    'jest/prefer-todo': 'warn',
    'jest/require-to-throw-message': 'warn',

    // DISABLED

    'jest/no-hooks': 'off',
    'jest/no-mocks-import': 'off',
    'jest/no-test-prefixes': 'off',
    'jest/no-truthy-falsy': 'off',
    'jest/prefer-called-with': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error'
  }
};
