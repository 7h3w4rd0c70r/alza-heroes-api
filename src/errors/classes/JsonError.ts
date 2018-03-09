
export default class JsonError extends Error {
    name: string;
    message: string;
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message)

        this.name = this.constructor.name
        this.httpStatus = httpStatus
    }
}
