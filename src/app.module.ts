import { Module } from '@nestjs/common';
import { FeaturesModule } from '@Features';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		FeaturesModule
	],
	controllers: [
		AppController
	],
	providers: [
		AppService
	]
})
export class AppModule {}
