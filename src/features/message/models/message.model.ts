import { User } from '../../user';

export class Message {
    constructor(
        public readonly user: User,
        public readonly text: string
    ) {}
}
