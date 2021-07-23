import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FeaturesModule } from '@features';
import { SharedModule } from './shared.module';

@Module({
	imports: [
		SharedModule,
		FeaturesModule
	]
})
export class AppModule {}
