
import { BadRequestError } from './classes/BadRequestError'
import { ForbiddenError } from './classes/ForbiddenError'
import { NotFoundError } from './classes/NotFoundError'
import { ServerError } from './classes/ServerError'
import { UnauthorizedError } from './classes/UnauthorizedError'
import { UnprocessableEntityError } from './classes/UnprocessableEntityError'

export { default as JsonError } from './classes/JsonError'

export default {
    badRequest: (message: string = 'Bad Request'): BadRequestError =>
        new BadRequestError(message),

    forbidden: (message: string = 'Forbidden'): ForbiddenError =>
        new ForbiddenError(message),

    notFound: (message: string = 'Not Found'): NotFoundError =>
        new NotFoundError(message),

    serverError: (message: string = 'Server Error'): ServerError =>
        new ServerError(message),

    unauthorized: (message: string = 'Unauthorized'): UnauthorizedError =>
        new UnauthorizedError(message),

    unprocessableEntity: (message: string = 'Unprocessable Entity'): UnprocessableEntityError =>
        new UnprocessableEntityError(message),
}
