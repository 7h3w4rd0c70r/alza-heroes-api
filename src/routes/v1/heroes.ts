
import { Router } from 'express'

import { handleController } from '../../middlewares'
import * as heroesController from '../../controllers/heroes'

const router = Router()

router
    .route('/')
    .get(handleController(heroesController.get_heroes))
    .post(handleController(heroesController.post_heroes))

router
    .route('/:heroId')
    .put(handleController(heroesController.put_hero))

export default router
