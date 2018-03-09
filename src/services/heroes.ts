
import * as _ from 'lodash'

import * as db from '../repositories/mongo'
import {
    State,
    Hero,
} from '../models'

export async function getHeroes(params: object = { }, state: State): Promise<Hero[]> {
    const heroes: Hero[] = await db.Hero.find(params)
    return heroes
}

export async function getHighestUsedId(state: State): Promise<number> {
    const heroes = await db.Hero.find({ }).sort({ _id: -1 }).limit(1)
    
    let highestUsedId = 0
    if (!_.isNil(heroes[0]) && _.isNumber(heroes[0]._id)) {
        highestUsedId = heroes[0]._id
    }

    return highestUsedId
}

export async function createHero(hero: Hero, state: State): Promise<any> {
    const _id = (await getHighestUsedId(state)) + 1
    return await db.Hero.create(_.merge({ }, hero, { _id }))
}

export async function updateHero(heroId: number, hero: Hero, state: State): Promise<any> {
    return await db.Hero.findByIdAndUpdate(heroId, { $set: hero })
}
