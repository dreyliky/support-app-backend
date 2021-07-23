import { Injectable } from '@nestjs/common';
import { Support } from '../models';
import { SupportRepository } from '../repositories';

@Injectable()
export class SupportService {
    constructor(
        private readonly supportRepository: SupportRepository
    ) {}

    public getById(id: number): Support {
        return this.supportRepository.getById(id);
    }

    public create(): Support {
        return new Support();
    }
}
