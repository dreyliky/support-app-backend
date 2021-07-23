import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { RoomService } from '../../room';

@Injectable()
export class TelegramBotListenerService {
    private readonly botToken = '1939938120:AAFhFp1fTUdKtF5b4xGwHh6Yvw3zv2MkJOA';
    private readonly botInstance: TelegramBot;

    constructor(
        private readonly roomService: RoomService
    ) {
        this.botInstance = new TelegramBot(this.botToken, { polling: true });

        this.initUserMessagesObserver();
    }

    private initUserMessagesObserver(): void {
        this.botInstance.on('message', (telegramMessage) => {
            this.roomService.create(telegramMessage);
        });
    }
}
