import { Injectable } from '@nestjs/common';
import { StorageService } from '@core';
import { Room } from '../models';

@Injectable()
export class RoomState {
    private readonly data: Room[] = [];

    constructor(
        private readonly storageService: StorageService
    ) {}

    public getAll(): Room[] {
        return [...this.data];
    }

    public create(room: Room): void {
        this.data.push(room);
    }
}
