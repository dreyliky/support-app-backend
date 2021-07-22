import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { RoomBuilder, RoomService } from '../../room';

@Injectable()
export class TelegramBotListenerService {
    private readonly botToken = '1939938120:AAFhFp1fTUdKtF5b4xGwHh6Yvw3zv2MkJOA';
    private readonly botInstance: TelegramBot;

    constructor(
        private readonly roomService: RoomService
    ) {
        this.botInstance = new TelegramBot(this.botToken, { polling: true });

        this.initUserMessageObserver();
    }

    private initUserMessageObserver(): void {
        this.botInstance.on('message', (telegramMessage) => {
            const room = RoomBuilder.build(telegramMessage);

            console.log(telegramMessage);
            console.log(room);

            this.roomService.create(room);
        });
    }
}
