import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post('login')
	public login(): string {
		return 'login';
	}

    @Post('registration')
	public registration(): string {
		return 'registration';
	}
}
