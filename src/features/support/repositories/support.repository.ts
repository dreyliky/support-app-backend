import { Injectable } from '@nestjs/common';
import { StorageKeyEnum, StorageService } from '@core';
import { SupportDbInfo } from '../interfaces';

@Injectable()
export class SupportRepository {
    constructor(
        private readonly storageService: StorageService
    ) {
        this.initDefaultValueIfNeeded();
    }

    public getAll(): SupportDbInfo[] {
        return this.storageService.get(StorageKeyEnum.Supports);
    }

    public getById(id: string): SupportDbInfo {
        const supports = this.getAll();

        return supports
            .find((currentSupport) => currentSupport.id === id);
    }

    public create(support: SupportDbInfo): void {
        const supports = this.getAll();

        supports.push(support);

        this.storageService.set(StorageKeyEnum.Supports, supports);
    }

    private initDefaultValueIfNeeded(): void {
        if (!this.storageService.has(StorageKeyEnum.Supports)) {
            this.storageService.set(StorageKeyEnum.Supports, []);
        }
    }
}
