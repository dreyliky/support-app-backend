import { BaseUserInfo } from '../interfaces';

export class User implements BaseUserInfo {
    public id: number;
    public name: string;
    public login: string;
}
