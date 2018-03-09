
import { default as JsonError } from './JsonError'

export class ForbiddenError extends JsonError {
    constructor(message: string) {
        super(message, 403)
    }
}
