import { Controller, Get } from '@nestjs/common';
import { Room } from '../models';
import { RoomService } from '../services';

@Controller('rooms')
export class RoomController {
	constructor(
        private readonly roomService: RoomService
    ) {}

	@Get()
	public getAll(): Room[] {
		return this.roomService.getAll();
	}
}
