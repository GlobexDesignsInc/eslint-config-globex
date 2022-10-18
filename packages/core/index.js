module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	globals: {
		__DEV__: 'writeable',
	},
	parserOptions: {
		ecmaVersion: 'latest',
		requireConfigFile: false,
		sourceType: 'module',
	},
	plugins: [
		'filenames',
		'import',
		'json',
		'promise',
		'sonarjs',
	],
	reportUnusedDisableDirectives: true,
	rules: {
		// ERRORS

		'accessor-pairs': 'error',
		'array-bracket-spacing': ['error', 'never'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', {before: true, after: true}],
		'block-scoped-var': 'error',
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', {allowSingleLine: true}],
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		}],
		'comma-spacing': ['error', {before: false, after: true}],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-return': 'error',
		'consistent-this': 'error',
		'constructor-super': 'error',
		'default-param-last': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'allow-null'],
		'filenames/match-exported': 'error',
		'for-direction': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': 'error',
		'func-style': ['error', 'expression'],
		'generator-star-spacing': ['error', {before: false, after: true}],
		'getter-return': 'error',
		'guard-for-in': 'error',
		'import/default': 'error',
		'import/dynamic-import-chunkname': ['error', {
			importFunctions: ['dynamicImport'],
			webpackChunknameFormat: '[a-zA-Z0-57-9-/_]',
		}],
		'import/export': 'error',
		'import/extensions': ['error', 'never'],
		'import/first': 'error',
		'import/named': 'error',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-commonjs': 'error',
		'import/no-duplicates': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-namespace': 'error',
		'import/no-self-import': 'error',
		'import/no-unresolved': 'error',
		'import/no-useless-path-segments': 'error',
		'import/prefer-default-export': 'error',
		indent: ['error', 'tab', {SwitchCase: 1}],
		'json/*': ['error', {allowComments: true}],
		'key-spacing': ['error', {mode: 'strict', beforeColon: false, afterColon: true}],
		'keyword-spacing': ['error', {before: true, after: true, overrides: {}}],
		'lines-between-class-members': ['error', 'always'],
		'max-depth': ['error', 3],
		'max-len': ['error', 150, 4],
		'max-lines': ['error', {max: 1000, skipBlankLines: false, skipComments: true}],
		'max-lines-per-function': ['error', 250],
		'max-nested-callbacks': ['error', 5],
		'max-params': ['error', 4],
		'max-statements': ['error', 100],
		'max-statements-per-line': ['error', {max: 2}],
		'newline-per-chained-call': ['error', {ignoreChainWithDepth: 3}],
		'new-parens': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'error',
		'no-constant-condition': 'error',
		'no-constructor-return': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': ['error', {boolean: true, number: true, string: true}],
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-import-assign': 'error',
		'no-inline-comments': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-label-var': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-obj-calls': 'error',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-setter-return': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': ['error', {skipBlankLines: false}],
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'error',
		'no-unused-private-class-members': 'error',
		'no-unused-vars': ['error', {
			args: 'none',
			ignoreRestSiblings: true,
		}],
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],
		'no-var': 'error',
		'no-void': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'object-curly-spacing': ['error', 'never'],
		'object-shorthand': 'error',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'after'],
		'padding-line-between-statements': [
			'error',
			{blankLine: 'always', prev: ['directive'], next: '*'},
			{blankLine: 'never', prev: ['directive'], next: ['directive']},
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'promise/always-return': 'error',
		'promise/catch-or-return': ['error', {terminationMethod: ['catch', 'finally']}],
		'promise/no-return-wrap': 'error',
		'promise/no-multiple-resolved': 'error',
		'promise/no-new-statics': 'error',
		'promise/no-promise-in-callback': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/param-names': 'error',
		'promise/valid-params': 'error',
		quotes: ['error', 'single', {allowTemplateLiterals: true}],
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': ['error', 'never'],
		semi: ['error', 'always'],
		'semi-spacing': ['error', {before: false, after: true}],
		'semi-style': ['error', 'last'],
		'sonarjs/no-all-duplicated-branches': 'error',
		'sonarjs/no-collapsible-if': 'error',
		'sonarjs/no-duplicated-branches': 'error',
		'sonarjs/no-element-overwrite': 'error',
		'sonarjs/no-empty-collection': 'error',
		'sonarjs/no-extra-arguments': 'error',
		'sonarjs/no-gratuitous-expressions': 'error',
		'sonarjs/no-identical-conditions': 'error',
		'sonarjs/no-identical-expressions': 'error',
		'sonarjs/no-nested-switch': 'error',
		'sonarjs/no-nested-template-literals': 'error',
		'sonarjs/no-one-iteration-loop': 'error',
		'sonarjs/no-redundant-boolean': 'error',
		'sonarjs/no-redundant-jump': 'error',
		'sonarjs/no-same-line-conditional': 'error',
		'sonarjs/no-unused-collection': 'error',
		'sonarjs/no-use-of-empty-return-value': 'error',
		'sonarjs/non-existent-operator': 'error',
		'sonarjs/prefer-immediate-return': 'error',
		'sonarjs/prefer-object-literal': 'error',
		'sonarjs/prefer-single-boolean-return': 'error',
		'sonarjs/prefer-while': 'error',
		'sort-imports': ['error', {
			ignoreCase: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
		}],
		'sort-vars': ['error', {ignoreCase: true}],
		'space-before-blocks': 'error',
		'space-before-function-paren': 'error',
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', {int32Hint: false}],
		'space-unary-ops': ['error', {words: true, nonwords: false}],
		'spaced-comment': ['error', 'always'],
		strict: ['error', 'global'],
		'switch-colon-spacing': ['error', {after: true, before: false}],
		'symbol-description': 'error',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'always'],
		'unicode-bom': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'yield-star-spacing': ['error', {before: true, after: false}],
		yoda: 'error',
		'wrap-iife': 'error',
		'wrap-regex': 'error',

		// WARNINGS

		'array-callback-return': 'warn',
		complexity: 'warn',
		'no-console': 'warn',
		'no-warning-comments': ['warn', {terms: ['todo', 'fixme', 'future'], location: 'anywhere'}],
		'prefer-rest-params': 'warn',

		// DISABLED

		'array-bracket-newline': 'off',
		'array-element-newline': 'off',
		'arrow-body-style': ['off', 'as-needed'],
		camelcase: 'off',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		curly: 'off',
		'default-case': 'off',
		'filenames/match-regex': 'off',
		'filenames/no-index': 'off',
		'func-names': 'off',
		'function-call-argument-newline': 'off',
		'function-paren-newline': 'off',
		'grouped-accessor-pairs': 'off',
		'id-denylist': ['off', 'data', 'err', 'e', 'cb', 'callback'],
		'id-length': ['off', {min: 3, max: 30, exceptions: ['i', 'x']}],
		'id-match': ['off', '^[a-z]+([A-Z][a-z]+)*$', {properties: false}],
		'implicit-arrow-linebreak': 'off',
		// Doesn't let us leave Flow `export type` at the top of the file
		'import/exports-last': 'off',
		'import/group-exports': 'off',
		'import/max-dependencies': 'off',
		// This rule is incredibly slow to execute, and since we already use
		// `import/no-namespace` it doesn't make sense to keep it on
		'import/namespace': 'off',
		'import/no-anonymous-default-export': 'off',
		// Disabled because it can slow down linting, but may be worth trying out later:
		'import/no-cycle': ['off', {maxDepth: 3}],
		// This rule is incredibly slow to execute, and since we dont' use JSDoc
		// it's wasteful to run it
		'import/no-deprecated': 'off',
		'import/no-dynamic-require': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-internal-modules': 'off',
		'import/no-named-export': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-unassigned-import': 'off',
		'import/no-unused-modules': 'off',
		'import/no-webpack-loader-syntax': 'off',
		'import/order': 'off',
		'import/unambiguous': 'off',
		'init-declarations': 'off',
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': ['off', {beforeBlockComment: true, beforeLineComment: true}],
		'logical-assignment-operators': 'off',
		'max-classes-per-file': 'off',
		'multiline-comment-style': 'off',
		'multiline-ternary': 'off',
		'new-cap': 'off',
		'no-case-declarations': 'off',
		'no-confusing-arrow': 'off',
		'no-continue': 'off',
		'no-empty-function': 'off',
		'no-eq-null': 'off',
		'no-extra-parens': 'off',
		'no-invalid-this': 'off',
		'no-extra-label': 'off',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'off',
		'no-negated-condition': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-syntax': 'off',
		'no-shadow': 'off',
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'off',
		'no-unused-labels': 'off',
		'no-use-before-define': 'off',
		'no-useless-return': 'off',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': 'off',
		'object-property-newline': 'off',
		'one-var': ['off', 'always'],
		'padded-blocks': ['off', 'never'],
		'prefer-destructuring': 'off',
		'prefer-exponentiation-operator': 'off',
		'prefer-named-capture-group': 'off',
		'prefer-regex-literals': 'off',
		'promise/avoid-new': 'off',
		'promise/no-callback-in-promise': 'off',
		'promise/no-native': 'off',
		'promise/no-nesting': 'off',
		'promise/prefer-await-to-callbacks': 'off',
		'promise/prefer-await-to-then': 'off',
		// Doesn't play nice with koa code
		'require-atomic-updates': 'off',
		// Good canditate to be enabled as a replacement for default "complexity" rule
		'sonarjs/cognitive-complexity': 'off',
		'sonarjs/elseif-without-else': 'off',
		'sonarjs/max-switch-cases': 'off',
		'sonarjs/no-collection-size-mischeck': 'off',
		'sonarjs/no-duplicate-string': 'off',
		'sonarjs/no-identical-functions': 'off',
		'sonarjs/no-ignored-return': 'off',
		'sonarjs/no-inverted-boolean-check': 'off',
		'sonarjs/no-small-switch': 'off',
		'sonarjs/no-useless-catch': 'off',
		'sort-keys': ['off', 'asc', {caseSensitive: false, natural: true}],
		'vars-on-top': 'off',
	},
	settings: {
		'import/ignore': ['node_modules', '.(css|json|less|md|styl)$'],
	},
};