require('dotenv').config({ path: `${process.cwd()}/env/${!!process.env.NODE_ENV ? `.env.` + process.env.NODE_ENV : `.env`}` })

/**
 * @type {{ DOTENV_PROP: string | number | boolean }}
 */
const ENV_VARS = {
    DOTENV_PROP: process.env.DOTENV_PROP || ''
}

// console.log(">>> Environment Values : ", ENV_VARS)

module.export = ENV_VARS;