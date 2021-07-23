import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { RoomBuilder } from '../builders';
import { Room } from '../models';
import { RoomState } from '../states';

@Injectable()
export class RoomService {
    constructor(
        private readonly roomState: RoomState
    ) {}

    public getAll(): Room[] {
        return this.roomState.getAll();
    }

    public create(telegramMessage: TelegramBot.Message): Room {
        const room = RoomBuilder.build(telegramMessage);

        this.roomState.create(room);

        return room;
    }
}
