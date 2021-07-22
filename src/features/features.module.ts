import { Module } from '@nestjs/common';
import { RoomController, RoomService, RoomState } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
	controllers: [
		RoomController
	],
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
