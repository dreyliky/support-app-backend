import { Injectable } from '@nestjs/common';
import { StorageKeyEnum, StorageService } from '@core';
import { Support } from '../models';

@Injectable()
export class SupportRepository {
    constructor(
        private readonly storageService: StorageService
    ) {}

    public getAll(): Support[] {
        return this.storageService.get(StorageKeyEnum.Supports);
    }

    public getById(id: number): Support {
        const supports = this.getAll();

        return supports
            .find((currentSupport) => currentSupport.id === id);
    }

    public create(support: Support): void {
        const supports = this.getAll();

        supports.push(support);

        this.storageService.set(StorageKeyEnum.Supports, supports);
    }
}
