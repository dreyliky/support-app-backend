import { Module } from '@nestjs/common';
import { SharedModule } from '@app';
import { RoomController, RoomService, RoomState } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
	imports: [
		SharedModule
	],
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
