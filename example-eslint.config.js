import javascript from '@tobiaslabs/eslint-config-javascript'

export default [
	// Use the core JavaScript settings:
	...javascript.config,

	// Ignore things like built or special files:
	{
		ignores: [
			'deploy/*/build',
		],
	},

	// Specify the runtime globals per environment, for example:
	{
		...javascript.environment.browser,
		files: [
			'_runtime/browser/**/*.js',
			'app/webapp/**/*.js',
		],
	},
	{
		...javascript.environment.serviceworker,
		files: [
			'_runtime/cloudflare/**/*.js',
			'app/api/**/*.js',
		],
	},
	{
		...javascript.environment.nodejs,
		files: [
			'*.js',
			'_runtime/nodejs/**/*.js',
			'script/**/*.js',
		],
	},
]
