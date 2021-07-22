import { Module } from '@nestjs/common';
import { RoomService, RoomState } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
	providers: [
        RoomService,
        RoomState,
		TelegramBotListenerService
	]
})
export class FeaturesModule {
	constructor(
		// Create instances of services
		public readonly telegramBotListenerService: TelegramBotListenerService
	) {}
}
