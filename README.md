# eslint-config-javascript

ESLint configurations for modern projects using JavaScript.

Look at the [example config file](./example-eslint.config.js) for basic usage.

> Note: uses ESLint 9 and modern JavaScript.

## Using

Requires [ESlint](https://eslint.org/) version 9 and above:

```shell
npm install --save-dev eslint@^9
```

Install the normal way:

```shell
npm install --save-dev eslint @tobiaslabs/eslint-config-javascript
```

Create an ESLint config file:

```shell
touch eslint.config.js
```

### Overall Configuration

Import the default and use the `config` property as your overall configuration and style enforcement:

```js
import javascript from '@tobiaslabs/eslint-config-javascript'
export default [
	...javascript.config,
]
```

### Environment Globals

Specify globals for specific runtimes using the `environment` property and one of the following:

- `browser` - Modern browser runtime.
- `mongosh` - MongoDB shell runtime.
- `nodejs` - Modern Node.js runtime.
- `serviceworker` - Modern browser [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) runtime.

To use them, use the rest-spread inside an object, and specify the filepaths that execute in that environment.

For example, for JavaScript that is in a folder path `src` and executes in the browser:

```js
import javascript from '@tobiaslabs/eslint-config-javascript'
export default [
	// ... other configurations, then ...
	{
		...javascript.environment.browser,
		files: [
			'src/**/*.js',
		],
	},
]
```

## License

Published and released under the [Very Open License](http://veryopenlicense.com).
