module.exports = {
	env: {
		jasmine: true,
	},
	plugins: ['jasmine'],
	rules: {
		// ERRORS

		'jasmine/expect-matcher': 'error',
		'jasmine/expect-single-argument': 'error',
		'jasmine/missing-expect': 'error',
		'jasmine/no-expect-in-setup-teardown': 'error',
		'jasmine/no-focused-tests': 'error',
		'jasmine/no-global-setup': 'error',
		'jasmine/no-pending-tests': 'error',
		'jasmine/no-promise-without-done-fail': 'error',
		'jasmine/no-spec-dupes': ['error', 'branch'],
		'jasmine/no-suite-dupes': 'error',
		'jasmine/no-suite-callback-args': 'error',
		'jasmine/no-unsafe-spy': 'error',
		'jasmine/prefer-jasmine-matcher': 'error',

		// WARNINGS

		'jasmine/no-disabled-tests': 'warn',

		// DISABLED

		'jasmine/named-spy': 'off',
		'jasmine/new-line-before-expect': 'off',
		'jasmine/new-line-between-declarations': 'off',
		'jasmine/no-assign-spyon': 'off',
		'jasmine/no-describe-variables': 'off',
		'jasmine/prefer-toBeUndefined': 'off',
		'jasmine/prefer-toHaveBeenCalledWith': 'off',
	},
};
