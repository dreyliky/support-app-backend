import { Injectable } from '@nestjs/common';
import { Room } from '../models';
import { RoomState } from '../states';

@Injectable()
export class RoomService {
    constructor(
        private readonly roomState: RoomState
    ) {}

    public create(room: Room): void {
        this.roomState.create(room);
    }
}
