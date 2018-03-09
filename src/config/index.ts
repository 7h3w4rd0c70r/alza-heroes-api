
import * as path from 'path'
import * as fs from 'fs'
import * as _ from 'lodash'

import { Config } from './config.d'

const defaultConfig: Config = {
    environment: _.isString(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development',
    configEnv: _.isString(process.env.CONFIG_ENV) ? process.env.CONFIG_ENV : 'development',
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    params: {
        sendErrorStackTrace: true,
    },
    mongoose: {
        uri: 'mongodb://127.0.0.1:27017',
        db: 'alza-heroes',
    },
}

let environmentConfig = { }
const environmentConfigPath = path.resolve(__dirname, `./env/${defaultConfig.configEnv}.js`)
if (fs.existsSync(environmentConfigPath)) {
    environmentConfig = require(environmentConfigPath)
}

const config: Config = _.merge(
    defaultConfig,
    environmentConfig,
)

export default config
