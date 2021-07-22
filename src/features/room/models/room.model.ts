import { Message } from '../../message/models';
import { User } from '../../user/models';

export class Room {
    client: User;
    support: User;
    messages: Message[];
}
