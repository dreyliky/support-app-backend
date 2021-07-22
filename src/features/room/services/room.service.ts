import { Injectable } from '@nestjs/common';
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

    public create(room: Room): void {
        this.roomState.create(room);
    }
}
