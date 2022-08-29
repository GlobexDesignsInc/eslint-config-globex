const mainConfig = require('./packages/core');
const nodePlugin = require('./packages/node');

// This is pretty dangerous as it won't merge configs in the same way
// that ESLint does it. So some options (ie. overrides) will get corrupted.
// But I think as long as we only use the main config and the node plugin,
// this should be fine for now.
//
// In the future we can switch to ESLint's new eslint.config.js syntax
// which won't have this problem or the need to do manual merges.
const mergeDeep = (...objects) => {
	const isObject = (obj) => obj && typeof obj === 'object';

	return objects.reduce((prev, obj) => {
		Object.keys(obj).forEach((key) => {
			const pVal = prev[key];
			const oVal = obj[key];

			if (Array.isArray(pVal) && Array.isArray(oVal)) {
				prev[key] = pVal.concat(...oVal);
			} else if (isObject(pVal) && isObject(oVal)) {
				prev[key] = mergeDeep(pVal, oVal);
			} else {
				prev[key] = oVal;
			}
		});

		return prev;
	}, {});
};

module.exports = mergeDeep(mainConfig, nodePlugin, {
	rules: {
		'import/no-commonjs': 'off',
	},
});
