
import { Router } from 'express'

import heroes from './v1/heroes'

const api = Router()

api.use('/v1/heroes', heroes)

export { api }
