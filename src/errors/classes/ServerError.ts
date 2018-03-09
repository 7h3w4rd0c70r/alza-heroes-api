
import { default as JsonError } from './JsonError'

export class ServerError extends JsonError {
    constructor(message: string) {
        super(message, 500)
    }
}
