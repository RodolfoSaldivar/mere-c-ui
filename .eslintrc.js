module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
		'jest/globals': true
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'prettier',
		'jest'
	],
	'rules': {
		'prettier/prettier': 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'rest-spread-spacing': ['error'],
		'prefer-destructuring': ['error', {
			'array': true,
			'object': true
		}]
	}
};