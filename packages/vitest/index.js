module.exports = {
	plugins: ['vitest'],
	rules: {
		// ERRORS

		'vitest/consistent-test-it': ['error', {fn: 'it'}],
		'vitest/expect-expect': 'error',
		'vitest/max-nested-describe': ['error', {max: 2}],
		'vitest/no-conditional-tests': 'error',
		'vitest/no-focused-tests': 'error',
		'vitest/no-identical-title': 'error',
		'vitest/no-skipped-tests': 'error',

		// WARNINGS


		// DISABLED

		'vitest/no-hooks': 'off',
		'vitest/prefer-lowercase-title': 'off',
		'vitest/prefer-to-be': 'off',
	},
};
