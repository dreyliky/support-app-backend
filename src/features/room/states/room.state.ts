import { Injectable } from '@nestjs/common';
import { Room } from '../models/room.model';

@Injectable()
export class RoomState {
    private readonly data: Room[];
}
