/* eslint-disable import/no-commonjs */

module.exports = {
	plugins: [
		'node',
	],
	rules: {
		// ERRORS

		'node/callback-return': 'error',
		'node/global-require': 'error',
		'node/handle-callback-err': 'error',
		'node/no-deprecated-api': 'error',
		'node/no-exports-assign': 'error',
		'node/no-missing-import': 'error',
		'node/no-missing-require': 'error',
		'node/no-new-require': 'error',
		'node/no-path-concat': 'error',
		'node/no-process-env': 'error',
		'node/no-unpublished-bin': 'error',
		'node/no-unpublished-import': 'error',
		'node/no-unpublished-require': 'error',
		'node/no-unsupported-features/es-builtins': 'error',
		'node/no-unsupported-features/es-syntax': 'error',
		'node/no-unsupported-features/node-builtins': 'error',
		'node/prefer-global/buffer': ['error', 'always'],
		'node/prefer-global/console': ['error', 'always'],
		'node/prefer-global/process': ['error', 'always'],
		'node/prefer-global/text-decoder': ['error', 'always'],
		'node/prefer-global/text-encoder': ['error', 'always'],
		'node/prefer-global/url-search-params': ['error', 'always'],
		'node/prefer-global/url': ['error', 'always'],
		'node/prefer-promises/dns': 'error',
		'node/prefer-promises/fs': 'error',
		'node/process-exit-as-throw': 'error',
		'node/shebang': 'error',

		// WARNINGS


		// DISABLED

		'node/exports-style': 'off',
		'node/file-extension-in-import': 'off',
		'node/no-callback-literal': 'off',
		'node/no-extraneous-import': 'off',
		'node/no-extraneous-require': 'off',
		'node/no-mixed-requires': 'off',
		'node/no-process-exit': 'off',
		'node/no-restricted-import': 'off',
		'node/no-restricted-require': 'off',
		'node/no-sync': 'off',
	},
};
