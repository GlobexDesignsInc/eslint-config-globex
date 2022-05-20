/* eslint-disable import/no-commonjs */

module.exports = {
	plugins: [
		'@typescript-eslint',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	overrides: [{
		files: ['*.ts', '*.tsx'],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			sourceType: 'module',
		},
		rules: {
			// ERRORS

			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': [
				'error',
				{
					default: 'generic',
					readonly: 'generic',
				},
			],
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/ban-ts-comment': ['error', {
				minimumDescriptionLength: 5,
				'ts-expect-error': false,
			}],
			'@typescript-eslint/ban-tslint-comment': 'error',
			'@typescript-eslint/ban-types': ['error', {
				types: {
					String: {
						message: 'Use string instead',
						fixWith: 'string',
					},
					Boolean: {
						message: 'Use boolean instead',
						fixWith: 'boolean',
					},
					Number: {
						message: 'Use number instead',
						fixWith: 'number',
					},
					Symbol: {
						message: 'Use symbol instead',
						fixWith: 'symbol',
					},
					Function: {
						message: [
							'The `Function` type accepts any function-like value.',
							'It provides no type safety when calling the function, which can be a common source of bugs.',
							'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
							'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
						].join('\n'),
					},
					Object: {
						message: [
							'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
							'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
						].join('\n'),
					},
					// '{}': {
					// 	message: [
					// 		'`{}` actually means "any non-nullish value".',
					// 		'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
					// 		'- If you want a type meaning "any value", you probably want `unknown` instead.',
					// 	].join('\n'),
					// },
				},
			}],
			'@typescript-eslint/brace-style': ['error', '1tbs', {allowSingleLine: true}],
			'@typescript-eslint/class-literal-property-style': 'error',
			'@typescript-eslint/comma-dangle': ['error', {
				arrays: 'always-multiline',
				enums: 'never',
				generics: 'never',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
				tuples: 'never',
			}],
			'@typescript-eslint/comma-spacing': ['error', {before: false, after: true}],
			'@typescript-eslint/consistent-indexed-object-style': 'error',
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],
			'@typescript-eslint/consistent-type-exports': 'error',
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/dot-notation': 'error',
			'@typescript-eslint/func-call-spacing': ['error', 'never'],
			'@typescript-eslint/indent': ['error', 'tab', {SwitchCase: 1}],
			'@typescript-eslint/keyword-spacing': ['error', {before: true, after: true, overrides: {}}],
			'@typescript-eslint/lines-between-class-members': ['error', 'always'],
			'@typescript-eslint/member-delimiter-style': ['error', {
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				singleline: {
					delimiter: 'comma',
					requireLast: false,
				},
			}],
			'@typescript-eslint/member-ordering': 'error',
			'@typescript-eslint/method-signature-style': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					format: ['PascalCase'],
					leadingUnderscore: 'forbid',
					selector: 'typeAlias',
					suffix: ['Type'],
					trailingUnderscore: 'forbid',
				},
				// Allow any naming convention for properties as they are usually
				// names we cannot control
				{
					selector: 'property',
					format: null,
				},
			],
			'@typescript-eslint/no-array-constructor': 'error',
			'@typescript-eslint/no-base-to-string': 'error',
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/no-dupe-class-members': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-extra-non-null-assertion': 'error',
			'@typescript-eslint/no-extra-semi': 'error',
			'@typescript-eslint/no-extraneous-class': 'error',
			'@typescript-eslint/no-for-in-array': 'error',
			'@typescript-eslint/no-implied-eval': 'error',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-invalid-void-type': 'error',
			'@typescript-eslint/no-loop-func': 'error',
			'@typescript-eslint/no-loss-of-precision': 'error',
			'@typescript-eslint/no-meaningless-void-operator': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-parameter-properties': 'error',
			'@typescript-eslint/no-redeclare': 'error',
			'@typescript-eslint/no-redundant-type-constituents': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-this-alias': 'error',
			'@typescript-eslint/no-throw-literal': 'error',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-unnecessary-qualifier': 'error',
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/no-unnecessary-type-constraint': 'error',
			'@typescript-eslint/no-unsafe-argument': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-unused-vars': ['error', {args: 'none'}],
			'@typescript-eslint/no-use-before-define': [
				'error',
				{functions: true, classes: false},
			],
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/no-useless-empty-export': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/padding-line-between-statements': [
				'error',
				{blankLine: 'always', prev: ['directive'], next: '*'},
				{blankLine: 'never', prev: ['directive'], next: ['directive']},
			],
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/prefer-enum-initializers': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
			'@typescript-eslint/prefer-regexp-exec': 'error',
			'@typescript-eslint/prefer-return-this-type': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/prefer-ts-expect-error': 'error',
			'@typescript-eslint/promise-function-async': 'error',
			'@typescript-eslint/quotes': ['error', 'single', {allowTemplateLiterals: true}],
			'@typescript-eslint/require-array-sort-compare': 'error',
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/restrict-plus-operands': 'error',
			'@typescript-eslint/restrict-template-expressions': 'error',
			'@typescript-eslint/return-await': 'error',
			'@typescript-eslint/sort-type-union-intersection-members': 'error',
			'@typescript-eslint/space-before-blocks': 'error',
			'@typescript-eslint/space-before-function-paren': 'error',
			'@typescript-eslint/space-infix-ops': ['error', {int32Hint: false}],
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/triple-slash-reference': 'error',
			'@typescript-eslint/type-annotation-spacing': 'error',
			'@typescript-eslint/unbound-method': 'error',
			'@typescript-eslint/unified-signatures': 'error',
			'import/no-duplicates': 'error',

			// DISABLED

			'brace-style': 'off',
			'comma-dangle': 'off',
			'comma-spacing': 'off',
			'@typescript-eslint/consistent-type-assertions': 'off',
			'default-param-last': 'off',
			'dot-notation': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-member-accessibility': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'func-call-spacing': 'off',
			indent: 'off',
			'init-declarations': 'off',
			'@typescript-eslint/init-declarations': 'off',
			'keyword-spacing': 'off',
			'lines-between-class-members': 'off',
			'no-array-constructor': 'off',
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'no-dupe-class-members': 'off',
			'no-duplicate-imports': 'off',
			'no-empty-function': 'off',
			'no-extra-parens': 'off',
			'@typescript-eslint/no-extra-parens': 'off',
			'no-extra-semi': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'no-implied-eval': 'off',
			'no-invalid-this': 'off',
			'@typescript-eslint/no-invalid-this': 'off',
			'no-loop-func': 'off',
			'no-loss-of-precision': 'off',
			'no-magic-numbers': 'off',
			'@typescript-eslint/no-magic-numbers': 'off',
			'no-redeclare': 'off',
			'@typescript-eslint/no-restricted-imports': 'off',
			'no-restricted-imports': 'off',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'off',
			'no-throw-literal': 'off',
			'@typescript-eslint/no-type-alias': 'off',
			'no-unused-expressions': 'off',
			'no-unused-vars': 'off',
			'no-use-before-define': 'off',
			'no-useless-constructor': 'off',
			'object-curly-spacing': 'off',
			'@typescript-eslint/object-curly-spacing': ['off', 'never'],
			'padding-line-between-statements': 'off',
			'@typescript-eslint/prefer-for-of': 'off',
			'@typescript-eslint/prefer-function-type': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/prefer-readonly-parameter-types': 'off',
			quotes: 'off',
			'require-await': 'off',
			'no-return-await': 'off',
			'@typescript-eslint/non-nullable-type-assertion-style': 'off',
			semi: 'off',
			'@typescript-eslint/semi': 'off',
			'space-before-blocks': 'off',
			'space-before-function-paren': 'off',
			'space-infix-ops': 'off',
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/typedef': 'off',
		},
	}],
};
