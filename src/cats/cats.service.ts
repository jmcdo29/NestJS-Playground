import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './interface/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return this.catModel.find();
  }

  async createOne(createCatDto: CreateCatDto) {
    return this.catModel.create(createCatDto);
  }

  async updateMany(updateCatDTO: UpdateCatDto[]) {
    const updateArray = updateCatDTO.map(update => {
      const {_id, ...updateValues} = update;
      return {
        updateOne: {
          filter: { _id },
          update: {
            $set: updateValues,
          },
        },
      };
    });
    return this.catModel.bulkWrite(updateArray);
  }
}
