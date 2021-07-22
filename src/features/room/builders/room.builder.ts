import { Message as TelegramMessage } from 'node-telegram-bot-api';
import { Room } from '../models';
import { Message } from '../../message';
import { UserAdapter } from '../../user';

export abstract class RoomBuilder {
    public static build(telegramMessage: TelegramMessage): Room {
        const room = new Room();
        const client = UserAdapter.adaptFromTelegramMessage(telegramMessage);
        const initialMessage = new Message(client, telegramMessage.text);

        room.client = client;
        room.messages = [initialMessage];

        return room;
    }
}
