import { BaseUserInfo } from '../interfaces';

export class User implements BaseUserInfo {
    public id: string;
    public name: string;
    public login: string;
}
