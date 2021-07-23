import { Injectable } from '@nestjs/common';
import { StorageKeyEnum, StorageService } from '@core';
import { Room } from '../models';

@Injectable()
export class RoomRepository {
    constructor(
        private readonly storageService: StorageService
    ) {
        this.initDefaultValueIfNeeded();
    }

    public getAll(): Room[] {
        return this.storageService.get(StorageKeyEnum.rooms);
    }

    public create(room: Room): void {
        const rooms = this.getAll();

        rooms.push(room);

        this.storageService.set(StorageKeyEnum.rooms, rooms);
    }

    private initDefaultValueIfNeeded(): void {
        if (!this.storageService.has(StorageKeyEnum.rooms)) {
            this.storageService.set(StorageKeyEnum.rooms, []);
        }
    }
}
