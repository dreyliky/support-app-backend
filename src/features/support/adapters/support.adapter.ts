import { SupportDbInfo } from '../interfaces';
import { Support } from '../models';

export abstract class SupportAdapter {
    public static adaptFromDbInfo(dbInfo: SupportDbInfo): Support {
        const { id, login, name } = dbInfo; 

        return { id, login, name };
    }
}
