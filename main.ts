import * as dotenv from 'dotenv';

dotenv.config({ path: `${process.cwd()}/env/${!!process.env.NODE_ENV ? `.env.` + process.env.NODE_ENV : `.env`}` })

type EnvValues = {
    DOTENV_PROP: string | number | boolean
}

const ENV_VARS : EnvValues = {
    DOTENV_PROP: process.env.DOTENV_PROP || ''
}

export default ENV_VARS