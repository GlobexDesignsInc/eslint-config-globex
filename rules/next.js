/* eslint-disable import/no-commonjs */

module.exports = {
	plugins: ['@next/next'],
	rules: {
		// ERRORS

		'@next/next/no-document-import-in-page': 'error',
		'@next/next/no-head-import-in-document': 'error',

		// WARNINGS

		'@next/next/google-font-display': 'warn',
		'@next/next/google-font-preconnect': 'warn',
		'@next/next/link-passhref': 'warn',
		'@next/next/no-css-tags': 'warn',
		'@next/next/no-html-link-for-pages': 'warn',
		'@next/next/no-img-element': 'warn',
		'@next/next/no-page-custom-font': 'warn',
		'@next/next/no-sync-scripts': 'warn',
		'@next/next/no-title-in-document-head': 'warn',
		'@next/next/no-unwanted-polyfillio': 'warn',
	},
};
