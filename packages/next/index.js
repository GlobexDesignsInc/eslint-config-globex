module.exports = {
	plugins: ['@next/next'],
	rules: {
		// ERRORS

		'@next/next/inline-script-id': 'error',
		'@next/next/next-script-for-ga': 'error',
		'@next/next/no-assign-module-variable': 'error',
		'@next/next/no-before-interactive-script-outside-document': 'error',
		'@next/next/no-document-import-in-page': 'error',
		'@next/next/no-duplicate-head': 'error',
		'@next/next/no-head-import-in-document': 'error',
		'@next/next/no-script-component-in-head': 'error',
		'@next/next/no-styled-jsx-in-document': 'error',
		'@next/next/no-typos': 'error',

		// WARNINGS

		'@next/next/google-font-display': 'warn',
		'@next/next/google-font-preconnect': 'warn',
		'@next/next/no-css-tags': 'warn',
		'@next/next/no-head-element': 'warn',
		'@next/next/no-html-link-for-pages': 'warn',
		'@next/next/no-img-element': 'warn',
		'@next/next/no-page-custom-font': 'warn',
		'@next/next/no-sync-scripts': 'warn',
		'@next/next/no-title-in-document-head': 'warn',
		'@next/next/no-unwanted-polyfillio': 'warn',
	},
};
