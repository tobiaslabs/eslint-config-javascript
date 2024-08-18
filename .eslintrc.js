module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	overrides: [
		{
			files: [
				'*.js',
			],
			rules: {
				'array-bracket-spacing': [
					'error',
					'always',
					{
						'objectsInArrays': true,
						'arraysInArrays': true,
					},
				],
				'block-spacing': [
					'error',
					'always',
				],
				'brace-style': [
					'error',
					'1tbs',
					{
						'allowSingleLine': true,
					},
				],
				'comma-dangle': [
					'error',
					'always-multiline',
				],
				'comma-spacing': [
					'error',
					{
						'before': false,
						'after': true,
					},
				],
				'eol-last': [
					'error',
					'always',
				],
				'eqeqeq': [
					'error',
					'always',
				],
				'indent': [
					'error',
					'tab',
				],
				'keyword-spacing': [
					'error',
					{
						'before': true,
					},
				],
				'linebreak-style': [
					'error',
					'unix',
				],
				'no-eval': 'error',
				'no-implied-eval': 'error',
				'no-irregular-whitespace': [
					'error',
					{
						'skipStrings': false,
					},
				],
				'no-new': 'error',
				'no-return-await': 'error',
				'no-unexpected-multiline': 'error',
				'no-useless-rename': 'error',
				'no-var': [
					'error',
				],
				'object-curly-spacing': [
					'error',
					'always',
				],
				'quotes': [
					'error',
					'single',
					{
						'avoidEscape': true,
					},
				],
				'semi': [
					'error',
					'never',
				],
				'space-before-blocks': [
					'error',
					'always',
				],
				'space-before-function-paren': [
					'error',
					{
						'anonymous': 'always',
						'asyncArrow': 'always',
						'named': 'never',
					},
				],
				'space-in-parens': [
					'error',
					'never',
				],
				'valid-jsdoc': [
					'error',
					{
						'requireReturn': false,
					},
				],
			},
		},
	],
}
