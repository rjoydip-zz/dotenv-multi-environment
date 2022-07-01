# dotenv-multi-environment

Example shows how to load dotenv file in different environment

## Code

```js
require('dotenv').config({ path: `${process.cwd()}/env/${!!process.env.NODE_ENV ? `.env.` + process.env.NODE_ENV : `.env`}` })
```

## Package

* `cross-env` [ **Optional** ] - Cross platform setting of environment scripts
* `dotenv` - Loads environment variables from .env for nodejs projects for various environemnt.

## Note

Make sure you keen `env` folder in `.gitignore`. For example purpose I un-comment [line 74](https://github.com/rjoydip/dotenv-multi-environment/blob/main/.gitignore#L74). During development you have to comment it out. 

> **Don't upload any environment related files in your source controll repository.**