import { Support, SupportService, SupportCreationInfo } from '@features/support';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly supportService: SupportService
	) {}

	@Post('login')
	public login(): string {
		return 'login';
	}

    @Post('registration')
	public registration(@Body() supportCreationInfo: SupportCreationInfo): Support {
		return this.supportService.create(supportCreationInfo);
	}
}
