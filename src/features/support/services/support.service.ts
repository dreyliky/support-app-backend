import { Injectable } from '@nestjs/common';
import { SupportDbInfoAdapter, SupportAdapter } from '../adapters';
import { SupportCreationInfo, SupportDbInfo } from '../interfaces';
import { Support } from '../models';
import { SupportRepository } from '../repositories';

@Injectable()
export class SupportService {
    constructor(
        private readonly supportRepository: SupportRepository
    ) {}

    public getAll(): SupportDbInfo[] {
        return this.supportRepository.getAll();
    }

    public getById(id: string): SupportDbInfo {
        return this.supportRepository.getById(id);
    }

    public create(creationInfo: SupportCreationInfo): Support {
        const dbInfo = SupportDbInfoAdapter.adaptFromCreationInfo(creationInfo);

        this.supportRepository.create(dbInfo);

        return SupportAdapter.adaptFromDbInfo(dbInfo);
    }
}
