/* eslint-disable import/no-commonjs */

module.exports = {
	env: {
		jest: true,
	},
	plugins: [
		'jest',
	],
	rules: {
		// ERRORS

		'jest/consistent-test-it': ['error', {fn: 'it'}],
		'jest/expect-expect': 'error',
		'jest/max-nested-describe': ['error', {max: 3}],
		'jest/no-alias-methods': 'error',
		'jest/no-conditional-expect': 'error',
		'jest/no-conditional-in-test': 'error',
		'jest/no-deprecated-functions': 'error',
		'jest/no-done-callback': 'error',
		'jest/no-duplicate-hooks': 'error',
		'jest/no-export': 'error',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/no-interpolation-in-snapshots': 'error',
		'jest/no-jasmine-globals': 'error',
		'jest/no-jest-import': 'error',
		'jest/no-standalone-expect': 'error',
		'jest/no-test-return-statement': 'error',
		'jest/prefer-comparison-matcher': 'error',
		'jest/prefer-equality-matcher': 'error',
		'jest/prefer-expect-resolves': 'error',
		'jest/prefer-hooks-on-top': 'error',
		'jest/prefer-snapshot-hint': 'error',
		'jest/prefer-spy-on': 'error',
		'jest/prefer-to-be': 'error',
		'jest/prefer-to-contain': 'error',
		'jest/prefer-to-have-length': 'error',
		'jest/require-top-level-describe': 'error',
		'jest/valid-describe-callback': 'error',
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
		'jest/no-restricted-matchers': 'off',
		'jest/no-test-prefixes': 'off',
		'jest/prefer-called-with': 'off',
		'jest/prefer-expect-assertions': 'off',
		'jest/prefer-lowercase-title': 'off',
		'jest/prefer-strict-equal': 'off',
		'jest/unbound-method': 'off',
	},
};
