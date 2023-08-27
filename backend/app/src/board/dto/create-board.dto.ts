import { IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly content: string;

  @IsString()
  readonly password: string;
}
