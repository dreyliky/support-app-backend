import { Message as TelegramMessage } from 'node-telegram-bot-api';
import { User } from '../models';

export abstract class UserAdapter {
    public static adaptFromTelegramMessage(telegramMessage: TelegramMessage): User {
        const user = new User();
        user.id = telegramMessage.from.id;
        user.name = telegramMessage.from.username;
        user.photoLink = null;

        return user;
    }
}
