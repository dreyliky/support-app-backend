import { Controller, Get } from '@nestjs/common';

@Controller('supports')
export class SupportController {
	@Get('me')
	public getMe(): string {
		return 'me';
	}
}
