
import { default as JsonError } from './JsonError'

export class NotFoundError extends JsonError {
    constructor(message: string) {
        super(message, 404)
    }
}
