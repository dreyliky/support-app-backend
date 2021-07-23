import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { RoomBuilder } from '../builders';
import { Room } from '../models';
import { RoomRepository } from '../repository';

@Injectable()
export class RoomService {
    constructor(
        private readonly roomRepository: RoomRepository
    ) {}

    public getAll(): Room[] {
        return this.roomRepository.getAll();
    }

    public create(telegramMessage: TelegramBot.Message): Room {
        const room = RoomBuilder.build(telegramMessage);

        this.roomRepository.create(room);

        return room;
    }
}
