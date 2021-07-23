import { EnvConfigKeyEnum } from '@core';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { RoomService } from '../../room';

@Injectable()
export class TelegramBotListenerService {
    private botInstance: TelegramBot;

    constructor(
        private readonly configService: ConfigService,
        private readonly roomService: RoomService
    ) {
        this.initBotInstance();
        this.initUserMessagesObserver();
    }

    private initBotInstance(): void {
        const token = this.configService.get(EnvConfigKeyEnum.TELEGRAM_BOT_TOKEN);
        this.botInstance = new TelegramBot(token, { polling: true });
    }

    private initUserMessagesObserver(): void {
        this.botInstance.on('message', (telegramMessage) => {
            this.roomService.create(telegramMessage);
        });
    }
}
