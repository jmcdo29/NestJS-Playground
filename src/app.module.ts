import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { DatabaseModuleConfig } from './options/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      fileName: '.env',
    }),
    DatabaseModule.forRootAsync({
      useClass: DatabaseModuleConfig,
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
