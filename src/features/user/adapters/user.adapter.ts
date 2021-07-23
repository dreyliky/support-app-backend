import { Message as TelegramMessage } from 'node-telegram-bot-api';
import { User } from '../models';

export abstract class UserAdapter {
    public static adaptFromTelegramMessage(telegramMessage: TelegramMessage): User {
        const { id, first_name, last_name, username } = telegramMessage.from;
        const user = new User();
        user.id = id.toString();
        user.name = `${first_name} ${last_name}`;
        user.login = username;

        return user;
    }
}
