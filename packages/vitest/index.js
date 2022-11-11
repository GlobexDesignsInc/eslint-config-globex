module.exports = {
	plugins: ['vitest'],
	rules: {
		// ERRORS

		'vitest/max-nested-describe': ['error', {max: 2}],
		'vitest/no-focused-tests': 'error',
		'vitest/no-identical-title': 'error',
		'vitest/no-skipped-tests': 'error',

		// WARNINGS


		// DISABLED

		'vitest/lower-case-title': 'off',
	},
};
