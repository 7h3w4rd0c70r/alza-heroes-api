
import {
    Router,
    Request,
    Response,
    NextFunction,
} from 'express'

import { handleController } from '../middlewares'
import { api } from './api'

const router = Router()

router
    .use(async (req: Request, res: Response, next: NextFunction) => {
        res.set('Access-Control-Allow-Origin', '*')
        res.set('Access-Control-Allow-Headers', 'content-type')
        res.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, HEAD')

        return next()
    })

router
    .route('*')
    .options(handleController(async () => ({ status: 'ok' })))

router.use('/api', api)

export { router }
