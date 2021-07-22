import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramBotListenerService } from '@Features/telegram-bot';

@Module({
	imports: [],
	controllers: [
		AppController
	],
	providers: [
		AppService,
		TelegramBotListenerService
	]
})
export class AppModule {
	constructor(
		// Create instances of services
		public readonly telegramBotListenerService: TelegramBotListenerService
	) {}
}
