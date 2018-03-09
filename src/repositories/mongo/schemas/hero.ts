
import { Schema, SchemaTypes } from 'mongoose'

const Hero = new Schema({
    _id:     { type: SchemaTypes.Number },
    name:    { type: SchemaTypes.String, default: '' },
    hasStar: { type: SchemaTypes.Boolean, default: false },
})

export default Hero
