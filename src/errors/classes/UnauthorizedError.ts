
import { default as JsonError } from './JsonError'

export class UnauthorizedError extends JsonError {
    constructor(message: string) {
        super(message, 401)
    }
}
