module.exports = {
	plugins: ['vitest'],
	rules: {
		// ERRORS

		'vitest/lower-case-title': 'error',
		'vitest/max-nested-describe': ['error', 2],
		'vitest/no-idential-title': 'error',
		'vitest/no-skip-test': 'error',

		// WARNINGS


		// DISABLED

		'vitest/assertion-type': 'off',
		'vitest/no-conditional-in-test': 'off',
	},
};
