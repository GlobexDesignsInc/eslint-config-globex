/* eslint-disable flowtype/require-valid-file-annotation, import/no-commonjs */

module.exports = {
	plugins: [
		'jsx-a11y',
		'react',
		'react-hooks',
	],
	rules: {
		// ERRORS

		'jsx-a11y/accessible-emoji': 'error',
		'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
		'jsx-a11y/alt-text': 'error',
		'jsx-a11y/anchor-has-content': 'error',
		'jsx-a11y/anchor-is-valid': 'error',
		'jsx-a11y/aria-props': 'error',
		'jsx-a11y/aria-proptypes': 'error',
		'jsx-a11y/aria-role': 'error',
		'jsx-a11y/aria-unsupported-elements': 'error',
		'jsx-a11y/heading-has-content': 'error',
		'jsx-a11y/html-has-lang': 'error',
		'jsx-a11y/iframe-has-title': 'error',
		'jsx-a11y/img-redundant-alt': 'error',
		'jsx-a11y/interactive-supports-focus': 'error',
		'jsx-a11y/lang': 'error',
		'jsx-a11y/media-has-caption': 'error',
		'jsx-a11y/mouse-events-have-key-events': 'error',
		'jsx-a11y/no-access-key': 'error',
		'jsx-a11y/no-distracting-elements': 'error',
		'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
		'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
		'jsx-a11y/no-noninteractive-tabindex': 'error',
		'jsx-a11y/no-onchange': 'error',
		'jsx-a11y/no-redundant-roles': 'error',
		'jsx-a11y/no-static-element-interactions': 'error',
		'jsx-a11y/role-has-required-aria-props': 'error',
		'jsx-a11y/role-supports-aria-props': 'error',
		'jsx-a11y/scope': 'error',
		'jsx-a11y/tabindex-no-positive': 'error',
		'jsx-quotes': ['error', 'prefer-single'],
		'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: true}],
		'react/display-name': ['error', {ignoreTranspilerName: true}],
		'react/forbid-foreign-prop-types': 'error',
		'react/forbid-prop-types': ['error', {forbid: ['any', 'array', 'object']}],
		'react/jsx-boolean-value': ['error', 'always'],
		'react/jsx-closing-bracket-location': ['error', {location: 'after-props'}],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-spacing': ['error', 'never'],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-fragments': ['error', 'element'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'error',
		'react/jsx-max-props-per-line': ['error', {maximum: 4}],
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
		'react/jsx-no-target-blank': 'error',
		'react/jsx-no-undef': ['error', {allowGlobals: true}],
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-props-no-spreading': 'error',
		'react/jsx-sort-default-props': ['error', {ignoreCase: true}],
		'react/jsx-sort-props': 'error',
		'react/jsx-tag-spacing': ['error', {
			afterOpening: 'never',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		}],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': 'error',
		'react/no-access-state-in-setstate': 'error',
		'react/no-children-prop': 'error',
		'react/no-danger': 'error',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'error',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': ['error', {ignoreStateless: true}],
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-string-refs': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': ['error', {checkAliases: true}],
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': 'error',
		'react/prefer-stateless-function': 'error',
		'react/prop-types': ['error', {
			ignore: [
				'aria-label',
				'className',
				'children',
				'id',
				'onClick',
				'style',
			],
		}],
		'react/react-in-jsx-scope': 'error',
		'react/require-optimization': 'error',
		'react/require-render-return': 'error',
		'react/self-closing-comp': ['error', {component: true, html: true}],
		'react/sort-comp': ['error', {
			order: [
				'lifecycle',
				'render',
				'everything-else',
			],
			groups: {
				lifecycle: [
					'displayName',
					'mixins',
					'type-annotations',
					'propTypes',
					'contextTypes',
					'childContextTypes',
					'statics',
					'instance-variables',
					'loadProps',
					'defaultProps',
					'constructor',
					'getDefaultProps',
					'state',
					'getInitialState',
					'getDerivedStateFromProps',
					'getChildContext',
					'componentWillAppear',
					'componentDidAppear',
					'componentWillEnter',
					'componentDidEnter',
					'componentWillMount',
					'UNSAFE_componentWillMount',
					'componentDidMount',
					'componentDidCatch',
					'componentWillReceiveProps',
					'UNSAFE_componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'UNSAFE_componentWillUpdate',
					'componentDidUpdate',
					'componentWillLeave',
					'componentDidLeave',
					'componentWillUnmount',
				],
			},
		}],
		'react/sort-prop-types': ['error', {ignoreCase: true}],
		'react/state-in-constructor': 'error',
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',

		// WARNINGS

		'jsx-a11y/click-events-have-key-events': 'warn',
		'react/boolean-prop-naming': ['warn', {rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'}],
		'react/jsx-handler-names': ['warn', {
			eventHandlerPrefix: '_handle',
			eventHandlerPropPrefix: 'on',
		}],
		'react/no-find-dom-node': 'warn',
		'react/no-unused-prop-types': ['warn', {skipShapeProps: true}],

		// DISABLED

		'react/button-has-type': 'off',
		'react/destructuring-assignment': 'off',
		'react/forbid-component-props': 'off',
		'react/forbid-elements': 'off',
		'react/jsx-child-element-spacing': 'off',
		'react/jsx-curly-brace-presence': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-first-prop-new-line': 'off',
		'react/jsx-max-depth': 'off',
		'react/jsx-no-bind': 'off',
		'react/jsx-no-literals': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/no-array-index-key': 'off',
		'react/no-set-state': 'off',
		'react/require-default-props': 'off',
		'react/static-property-placement': 'off',
	},
};
