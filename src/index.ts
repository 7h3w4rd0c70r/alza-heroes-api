
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'

import config from './config'
import {
    commonTrackers,
    standardHandler,
    errorHandler,
} from './middlewares'
import { router } from './routes'

const server = express()

server
    .use(bodyParser.urlencoded({
        extended: true,
    }))
    .use(bodyParser.json())
    .use(cookieParser())
    .use(commonTrackers)
    .use('/', router)
    .use(standardHandler)
    .use(errorHandler)

server.listen(config.server.port, config.server.host, async function () {
    console.log(`Listening on ${config.server.host}:${config.server.port}`)
})
