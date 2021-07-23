import { Module } from '@nestjs/common';
import { FeaturesModule } from '@features';

@Module({
	imports: [
		FeaturesModule
	]
})
export class AppModule {}
