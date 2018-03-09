
import {
    Request,
    Response,
} from 'express'

import * as heroesService from '../services/heroes'

export async function get_heroes(req: Request, res: Response) {
    const heroes = await heroesService.getHeroes({ }, req.state)
    return heroes
}

export async function post_heroes(req: Request, res: Response) {
    return await heroesService.createHero(req.body, req.state)
}

export async function put_hero(req: Request, res: Response) {
    return await heroesService.updateHero(req.params.heroId, req.body, req.state)
}
