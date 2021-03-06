<div align="center">

<h1>eslint-config-globex</h1>

<img alt="eslint-config-globex" src="logo.png" width="128" />

<p><em>The Javascript code standards used at Globex Designs, Inc.</em></p>

<a href="https://www.npmjs.com/package/eslint-config-globex"><img alt="NPM Status" src="https://img.shields.io/npm/v/eslint-config-globex.svg?style=flat"></a>
<a href="https://www.npmtrends.com/eslint-config-globex"><img alt="NPM Download Stats" src="https://img.shields.io/npm/dm/eslint-config-globex.svg?style=flat-square" /></a>
<a href="https://github.com/GlobexDesignsInc/eslint-config-globex/blob/master/LICENSE"><img alt="NPM Download Stats" src="https://img.shields.io/npm/l/eslint-config-globex.svg?style=flat-square" /></a>

</div><hr />

## Install

```sh
# With npm
npm install -D eslint-config-globex

# or

# With yarn
yarn add -D eslint-config-globex
```

## Usage

> **NOTE**: `eslint-config-globex` comes with its own `eslint-globex` bin tool so that you don't need to install `eslint` as a peerDependency. All the necessary dependencies are bundled together for you.

Add the config to your `.eslintrc.js` file:

```js
module.exports = {
	"extends": [
		// Installs the base configuration for all JavaScript projects
		"eslint-config-globex",

		// (Optional) Additional rules for Flow static typing
		"eslint-config-globex/rules/flowtype",

		// (Optional) Additional rules for Jasmine
		"eslint-config-globex/rules/jasmine",

		// (Optional) Additional rules for Jest
		"eslint-config-globex/rules/jest",

		// (Optional) Additional rules for Next.js
		"eslint-config-globex/rules/next",

		// (Optional) Additional rules for React
		"eslint-config-globex/rules/react"
	]
}
```

Enable via `package.json` scripts with the custom `eslint-globex` bin:

```json
{
	"scripts": {
		"eslint": "eslint-globex ."
	}
}
```

## Publish a new version

```sh
yarn test

# for regular releases
yarn release

# for beta releases
yarn release --prerelease beta

# confirm code looks good

# then publish
git push --follow-tags origin master && npm publish
```
