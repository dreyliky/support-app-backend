import { Module } from '@nestjs/common';
import { SharedModule } from '@app';
import { AuthController } from './auth';
import { SupportController } from './support';
import { RoomController, RoomService, RoomRepository } from './room';
import { TelegramBotListenerService } from './telegram-bot';

@Module({
	imports: [
		SharedModule
	],
	controllers: [
		AuthController,
		SupportController,
		RoomController
	],
	providers: [
        RoomService,
        RoomRepository,
		TelegramBotListenerService
	]
})
export class FeaturesModule {
	constructor(
		// Create instances of services
		public readonly telegramBotListenerService: TelegramBotListenerService
	) {}
}
