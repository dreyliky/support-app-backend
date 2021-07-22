import { Injectable } from '@nestjs/common';
import { Room } from '../models';

@Injectable()
export class RoomState {
    private readonly data: Room[] = [];

    public create(room: Room): void {
        this.data.push(room);
    }
}
