import { Message } from '../../message';
import { User } from '../../user';

export class Room {
    public client: User;
    public support: User | null = null;
    public messages: Message[];
}
