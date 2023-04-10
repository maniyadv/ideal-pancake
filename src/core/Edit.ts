export default class Edit {
    message: string;

    constructor(message = '') {
        this.message = message;
    }

    getMessage(): string {
        return this.message;
    }
}
