import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin-js'
import globals from 'globals'

export default {
	environment: {

		// ===== ENV: BROWSER =====

		browser: {
			name: '@tobiaslabs/eslint-config-javascript:environment.browser',
			languageOptions: {
				globals: {
					...globals.browser,
				},
			},
		},

		// ===== ENV: MONGODB SHELL =====

		mongosh: {
			name: '@tobiaslabs/eslint-config-javascript:environment.mongosh',
			languageOptions: {
				globals: {
					...globals.mongo,
				},
			},
		},

		// ===== ENV: NODEJS =====

		nodejs: {
			name: '@tobiaslabs/eslint-config-javascript:environment.nodejs',
			languageOptions: {
				globals: {
					...globals.nodeBuiltin,
				},
			},
		},

		// ===== ENV: SERVICE WORKER =====

		serviceworker: {
			name: '@tobiaslabs/eslint-config-javascript:environment.serviceworker',
			languageOptions: {
				globals: {
					...globals.serviceworker,
				},
			},
		},
	},
	config: [

		// ===== ESLint =====

		{
			name: '@tobiaslabs/eslint-config-javascript:eslint-recommended',
			...js.configs.recommended,
		},

		// ===== Tobias Labs =====

		{
			name: '@tobiaslabs/eslint-config-javascript:config',
			languageOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			plugins: {
				'@stylistic/js': stylistic,
			},
			files: [
				'**/*.js',
			],
			rules: {

				// ========== STYLES ==========

				'@stylistic/js/array-bracket-spacing': [
					'error',
					'always',
					{
						'objectsInArrays': true,
						'arraysInArrays': true,
					},
				],
				'@stylistic/js/block-spacing': [
					'error',
					'always',
				],
				'@stylistic/js/brace-style': [
					'error',
					'1tbs',
					{
						'allowSingleLine': true,
					},
				],
				'@stylistic/js/comma-dangle': [
					'error',
					'always-multiline',
				],
				'@stylistic/js/comma-spacing': [
					'error',
					{
						'before': false,
						'after': true,
					},
				],
				'@stylistic/js/eol-last': [
					'error',
					'always',
				],
				'@stylistic/js/indent': [
					'error',
					'tab',
				],
				'@stylistic/js/keyword-spacing': [
					'error',
					{
						'before': true,
					},
				],
				'@stylistic/js/linebreak-style': [
					'error',
					'unix',
				],
				'@stylistic/js/object-curly-spacing': [
					'error',
					'always',
				],
				'@stylistic/js/quotes': [
					'error',
					'single',
					{
						'avoidEscape': true,
					},
				],
				'@stylistic/js/semi': [
					'error',
					'never',
				],
				'@stylistic/js/space-before-blocks': [
					'error',
					'always',
				],
				'@stylistic/js/space-before-function-paren': [
					'error',
					{
						'anonymous': 'always',
						'asyncArrow': 'always',
						'named': 'never',
					},
				],
				'@stylistic/js/space-in-parens': [
					'error',
					'never',
				],

				// ========== ESLINT CORE ==========

				'eqeqeq': [
					'error',
					'always',
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
				'no-unexpected-multiline': 'error',
				'no-useless-rename': 'error',
				'no-var': [
					'error',
				],
			},
		},

	]
}
