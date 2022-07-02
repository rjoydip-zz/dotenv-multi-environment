# dotenv-multi-environment

Example shows how to load dotenv file in different environment

## Code

```js
require('dotenv').config({ path: `${process.cwd()}/env/${!!process.env.NODE_ENV ? `.env.` + process.env.NODE_ENV : `.env`}` })
```

## Package

* `cross-env` [ **Optional** ] - Cross platform setting of environment scripts
* `dotenv` - Loads environment variables from .env for nodejs projects for various environemnt.

## Application commands

If you run your application using below package manager then folow command format.

### Package manager

- [npm](https://docs.npmjs.com/) - `npm run <cmd>`
- [yarn](https://yarnpkg.com/) - `yarn <cmd>`
- [pnpm](https://pnpm.io/) - `pnpm run <cmd>`

### Commands

* `"start": "tsup"` - Build without specified environment
* `"dev": "node main.module.js"` - Run main JS file
* `"build": "run-p build:*"` - Parallely build with environment [For example]()
* `"build:dev": "tsup --env.NODE_ENV dev"` - Development build
* `"build:local": "tsup --env.NODE_ENV local"` - Local build
* `"build:production": "tsup --env.NODE_ENV production"` - Production build
* `"test": "vitest run"` - Test and run to get test result
* `"test:watch": "vitest"` - Watching test file changes
* `"test:ui": "vitest --ui"` - Show test exectution in UI
* `"coverage": "vitest run --coverage"` - C8 test coverage
* `"run:all": "run-p start test coverage"` - Run all main scripts together - CI

## Note

Make sure you keen `env` folder in `.gitignore`. For example purpose I un-comment [line L73-L74](https://github.com/rjoydip/dotenv-multi-environment/blob/main/.gitignore#L73-L74). During development you have to comment it out. 

> **Don't upload any environment related files in your source controll repository.**