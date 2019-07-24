import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '../config/config.service';

@Injectable()
export class MongooseModuleConfig implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  async createMongooseOptions(): Promise<MongooseModuleOptions> {
    return {
      uri: this.configService.get('MONGO_URI'),
    };
  }
}
