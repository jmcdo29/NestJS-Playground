import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseModuleConfig } from './options/database.config';
import { ConfigModuleConfig } from './options/config.config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModuleConfig } from './options/mongo.config';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    ConfigModule.forRootAsync({
      useClass: ConfigModuleConfig,
    }),
    DatabaseModule.forRootAsync({
      useClass: DatabaseModuleConfig,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseModuleConfig,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
