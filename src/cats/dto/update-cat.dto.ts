import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto implements Partial<CreateCatDto> {
  // tslint:disable-next-line: variable-name
  readonly _id: string;
  readonly name?: string;
  readonly age?: number;
  readonly breed?: string;
}
