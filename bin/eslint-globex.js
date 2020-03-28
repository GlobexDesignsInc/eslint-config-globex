#!/usr/bin/env node
/* eslint-disable import/no-commonjs */

const fs = require('fs');
const path = require('path');

const binPath = path.join('node_modules', 'eslint', 'bin', 'eslint.js');

const fileExists = function (path) {
	let exists;
	try {
		fs.accessSync(path, fs.F_OK);
		exists = true;
	} catch (e) {
		exists = false;
	}
	return exists;
};

const findBin = function (search) {
	const searchPath = path.join(search, binPath);
	const exists = fileExists(searchPath);
	if (!exists) {
		const nextSearchPath = path.join(search, '..');
		if (nextSearchPath === '/') return null;
		return findBin(nextSearchPath);
	}
	return searchPath;
};

const bin = findBin(__dirname);
if (!bin) throw new Error(`Unable to find ESLint executable. Did you run 'npm install'?`);

module.exports = require(bin);
