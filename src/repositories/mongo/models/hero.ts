
import { Model } from 'mongoose'

import mongoose from '../connector'
import HeroSchema from '../schemas/hero'
import {
    HeroDocument,
} from '../../../models'

const Hero: Model<HeroDocument> = mongoose.model<HeroDocument>('Hero', HeroSchema)

export default Hero
