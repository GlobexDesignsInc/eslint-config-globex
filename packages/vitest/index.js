module.exports = {
	plugins: ['vitest'],
	rules: {
		// ERRORS

		'vitest/max-nested-describe': ['error', {max: 2}],
		'vitest/no-identical-title': 'error',
		'vitest/no-skipped-tests': 'error',

		// WARNINGS


		// DISABLED

		'vitest/assertion-type': 'off',
		'vitest/lower-case-title': 'off',
		'vitest/no-conditional-in-tests': 'off',
	},
};
