module.exports = {
	plugins: ['vitest'],
	rules: {
		// ERRORS

		'vitest/consistent-test-filename': 'error',
		'vitest/consistent-test-it': ['error', {fn: 'it'}],
		'vitest/expect-expect': 'error',
		'vitest/max-nested-describe': ['error', {max: 2}],
		'vitest/no-alias-methods': 'error',
		'vitest/no-commented-out-tests': 'error',
		'vitest/no-conditional-expect': 'error',
		'vitest/no-conditional-in-test': 'error',
		'vitest/no-conditional-tests': 'error',
		'vitest/no-disabled-tests': 'error',
		'vitest/no-focused-tests': 'error',
		'vitest/no-identical-title': 'error',
		'vitest/no-skipped-tests': 'error',

		// WARNINGS


		// DISABLED

		'vitest/max-expects': 'off',
		'vitest/no-hooks': 'off',
		'vitest/no-restricted-vi-methods': 'off',
		'vitest/prefer-lowercase-title': 'off',
		'vitest/prefer-to-be': 'off',
	},
};
