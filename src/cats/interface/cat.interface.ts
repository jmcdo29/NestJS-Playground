import { Document } from 'mongoose';

export interface Cat extends Document {
  age: number;
  name: string;
  breed: string;
}
