module.exports = {
	overrides: [{
		files: [
			'**/__mocks__/**',
			'**/tests/**/*',
			'**/*.test.js',
		],
		rules: {
			'flowtype/no-types-missing-file-annotation': 'off',
			'flowtype/require-parameter-type': 'off',
			'flowtype/require-return-type': 'off',
			'flowtype/require-valid-file-annotation': 'off',
		},
	}],
	plugins: ['flowtype'],
	rules: {
		// ERRORS

		'flowtype/array-style-complex-type': 'error',
		'flowtype/array-style-simple-type': 'error',
		'flowtype/arrow-parens': ['error', 'always'],
		'flowtype/boolean-style': ['error', 'boolean'],
		'flowtype/define-flow-type': 'error',
		'flowtype/delimiter-dangle': ['error', 'always-multiline'],
		'flowtype/enforce-line-break': 'error',
		'flowtype/generic-spacing': ['error', 'never'],
		'flowtype/newline-after-flow-annotation': 'error',
		'flowtype/no-dupe-keys': 'error',
		'flowtype/no-duplicate-type-union-intersection-members': 'error',
		'flowtype/no-existential-type': 'error',
		'flowtype/no-internal-flow-type': 'error',
		'flowtype/no-mixed': 'error',
		'flowtype/no-primitive-constructor-types': 'error',
		'flowtype/no-types-missing-file-annotation': 'error',
		'flowtype/no-unused-expressions': 'error',
		'flowtype/no-weak-types': ['error', {
			any: false,
			Object: true,
			Function: true,
		}],
		'flowtype/object-type-delimiter': ['error', 'comma'],
		'flowtype/quotes': ['error', 'single'],
		'flowtype/require-indexer-name': ['error', 'always'],
		'flowtype/require-parameter-type': 'error',
		'flowtype/require-readonly-react-props': ['error', {
			useImplicitExactTypes: true,
		}],
		'flowtype/require-types-at-top': ['error', 'always'],
		'flowtype/require-valid-file-annotation': ['error', 'always', {
			annotationStyle: 'line',
			strict: true,
		}],
		'flowtype/semi': ['error', 'always'],
		'flowtype/sort-keys': ['error', 'asc'],
		'flowtype/sort-type-union-intersection-members': 'error',
		'flowtype/space-after-type-colon': ['error', 'always'],
		'flowtype/space-before-generic-bracket': ['error', 'never'],
		'flowtype/space-before-type-colon': ['error', 'never'],
		'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]+)+Type$'],
		'flowtype/type-import-style': ['error', 'identifier'],
		'flowtype/union-intersection-spacing': ['error', 'always'],
		'flowtype/use-flow-type': 'error',
		'flowtype/use-read-only-spread': 'error',

		// DISABLED

		'flowtype/interface-id-match': 'off',
		'flowtype/no-flow-fix-me-comments': 'off',
		'flowtype/no-mutable-array': 'off',
		'flowtype/require-compound-type-alias': 'off',
		'flowtype/require-inexact-type': 'off',
		'flowtype/require-exact-type': 'off',
		'flowtype/require-return-type': 'off',
		'flowtype/require-variable-type': 'off',
		'flowtype/spread-exact-type': 'off',
	},
	settings: {
		react: {
			flowVersion: '0.186.0',
		},
	},
};
