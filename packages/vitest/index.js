module.exports = {
	plugins: ['vitest'],
	rules: {
		// ERRORS

		'vitest/max-nested-describe': ['error', {max: 2}],
		'vitest/no-idential-title': 'error',
		'vitest/no-skip-test': 'error',

		// WARNINGS


		// DISABLED

		'vitest/assertion-type': 'off',
		'vitest/lower-case-title': 'off',
		'vitest/no-conditional-in-test': 'off',
	},
};
