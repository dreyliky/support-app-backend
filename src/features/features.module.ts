import { Module } from '@nestjs/common';
import { SharedModule } from '@app';
import { AuthController } from './auth';
import { SupportController, SupportRepository, SupportService } from './support';
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
		SupportService,
		TelegramBotListenerService,
        RoomRepository,
        SupportRepository
	]
})
export class FeaturesModule {
	constructor(
		// Create instances of services
		public readonly telegramBotListenerService: TelegramBotListenerService
	) {}
}
