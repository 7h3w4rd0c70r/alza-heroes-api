
import * as mongoose from 'mongoose'

import config from '../../config'

mongoose.connect(`${config.mongoose.uri}/${config.mongoose.db}`)

export default mongoose

