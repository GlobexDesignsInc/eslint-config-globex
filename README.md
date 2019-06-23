# eslint-config-globex

The Javascript code standards used at Globex Designs, INc.

## Install

```bash
yarn add -D eslint-config-globex
```

## Usage

> **NOTE**: `eslint-config-globex` comes with its own `eslint-globex` bin tool so that you don't need to install `eslint` as a peerDependency. All the necessary dependencies are bundled together for you.

Add the config to your `.eslintrc` file:

```json
{
	"extends": "eslint-config-globex"
}
```

Enable via `package.json` scripts with the custom `eslint-globex` bin:

```json
{
	"scripts": {
		"eslint": "eslint-globex src"
	}
}
```
