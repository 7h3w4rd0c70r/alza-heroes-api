

import {
    Request,
    Response,
    NextFunction,
} from 'express'
import { v4 as uuidv4 } from 'uuid'
import * as _ from 'lodash'

import config from '../config'
import errors from '../errors'

export const handleController = fn => async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.state.out = await fn(req, res)
        return next()
    } catch (ex) {
        return next(ex)
    }
}

export const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
    if (!_.isNumber(err.httpStatus)) {
        err.httpStatus = 500
    }

    res.status(err.httpStatus)

    const errOutput: any = _.pick(err, ['httpStatus', 'message', 'name'])
    if (config.params.sendErrorStackTrace) {
        errOutput.stack = _.get(err, 'stack')
    }

    res.json(errOutput)
}

export const standardHandler = (req: Request, res: Response, next: NextFunction) => {
    if (_.has(req, 'state.out')) {
        return res.json(req.state.out)
    }

    res.status(404)
    return res.json(errors.notFound())
}

export function commonTrackers(req: Request, res: Response, next: NextFunction) {
    const correlationId = req.header('X-Correlation-Id') || uuidv4()

    req.state = req.state || { }

    req.state.correlationId = correlationId
    res.set('X-Correlation-Id', correlationId)

    return next()
}
