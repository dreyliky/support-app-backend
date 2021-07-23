import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StorageService } from '@core';

@Module({
	imports: [
		ConfigModule.forRoot()
	],
    exports: [
        ConfigModule,
        StorageService
    ],
    providers: [
        StorageService
    ]
})
export class SharedModule {}
