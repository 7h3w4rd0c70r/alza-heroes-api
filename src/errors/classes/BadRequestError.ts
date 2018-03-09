
import { default as JsonError } from './JsonError'

export class BadRequestError extends JsonError {
    constructor(message: string) {
        super(message, 400)
    }
}
