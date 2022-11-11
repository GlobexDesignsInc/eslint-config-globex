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

# or

# With pnpm
pnpm add -D eslint-config-globex
```

## Usage

> **Note**
>
> `eslint-config-globex` comes with its own `eslint-globex` bin tool so that you don't need to install `eslint` as a peerDependency. `eslint-config-globex` tracks and manages `eslint` versions so you don't have to.

Add the config to your `.eslintrc.js` file:

```js
module.exports = {
	"extends": ["eslint-config-globex"]
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

## Extensions

The following optional extensions are available

- `@eslint-config-globex/flowtype`: Additional rules for Flow static typing
- `@eslint-config-globex/jasmine`: Additional rules for Jasmine
- `@eslint-config-globex/jest`: Additional rules for Jest
- `@eslint-config-globex/next`: Additional rules for Next.js
- `@eslint-config-globex/node`: Additional rules for Node.js
- `@eslint-config-globex/react`: Additional rules for React
- `@eslint-config-globex/typescript`: Additional rules for TypeScript
- `@eslint-config-globex/vitest`: Additional rules for Vitest

You can add an extension to your `.eslintrc` file like this:

```js
module.exports = {
	"extends": [
		"eslint-config-globex",
		"./node_modules/@eslint-config-globex/jest",
		"./node_modules/@eslint-config-globex/react"
	]
}
```

> **NOTE**
> Unfortunately the `./node_modules/` prefix is needed because ESLint doesn't support
> scoped package names in extend. See https://github.com/eslint/eslint/issues/9868
> for more info. This problem will go away once we use the new ESlint config syntax.

### Usage with Prettier

Unfortunately, Prettier has some opinions which are incompatible with the rules in this module and therefore cannot be used with `eslint-config-globex`.

### Usage with TypeScript

To use this config with TypeScript, enable the `@eslint-config-globex/typescript` rule set and make sure to set the `parserOptions.project` config setting in your project's `eslint.config.js` file:

```js
module.exports = {
	extends: [
		"eslint-config-globex",
		"./node_modules/@eslint-config-globex/typescript",
	],
	parserOptions: {
		project: './tsconfig.json'
	}
}
```
