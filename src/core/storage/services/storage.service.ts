import { Injectable } from '@nestjs/common';
import { LocalStorage } from 'node-localstorage';
import { STORAGE_FOLDER_PATH } from '../data';
import { StorageKeyEnum } from '../enums';

@Injectable()
export class StorageService {
    private readonly instance: LocalStorage;

    constructor() {
        this.instance = new LocalStorage(STORAGE_FOLDER_PATH);

        console.log(this.instance.getItem(StorageKeyEnum.rooms));
    }
}
