require('dotenv').config({ path: `${process.cwd()}/env/${!!process.env.NODE_ENV ? `.env.` + process.env.NODE_ENV : `.env`}` })

console.log(">>> ", process.env.DOTENV_PROP)