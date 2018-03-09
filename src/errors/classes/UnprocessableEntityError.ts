
import JsonError from './JsonError';

export class UnprocessableEntityError extends JsonError {
    constructor(message: string) {
        super(message, 422);
    }
}
