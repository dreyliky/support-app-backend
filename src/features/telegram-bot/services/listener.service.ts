import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramBotListenerService {
    private readonly botToken = '1939938120:AAFhFp1fTUdKtF5b4xGwHh6Yvw3zv2MkJOA';
    private readonly botInstance: TelegramBot;

    constructor() {
        this.botInstance = new TelegramBot(this.botToken, { polling: true });

        this.initUserMessageObserver();
    }

    private initUserMessageObserver(): void {
        this.botInstance.on('message', (message) => {
            console.log(message);
        });
    }
}
