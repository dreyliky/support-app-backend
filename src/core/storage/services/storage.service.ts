import { Injectable } from '@nestjs/common';
import { LocalStorage } from 'node-localstorage';
import { STORAGE_FOLDER_PATH } from '../data';
import { StorageKeyEnum } from '../enums';

@Injectable()
export class StorageService {
    private readonly instance: LocalStorage;

    constructor() {
        this.instance = new LocalStorage(STORAGE_FOLDER_PATH);
    }

    public get<T>(key: StorageKeyEnum): T {
        const dataAsJson = this.instance.getItem(key);

        return JSON.parse(dataAsJson);
    }

    public set<T>(key: StorageKeyEnum, data: T): void {
        const dataAsJson = JSON.stringify(data);

        this.instance.setItem(key, dataAsJson);
    }

    public has(key: StorageKeyEnum): boolean {
        return !!this.instance.getItem(key);
    }

    public remove(key: StorageKeyEnum): void {
        this.instance.removeItem(key);
    }

    public clear(): void {
        this.instance.clear();
    }
}
