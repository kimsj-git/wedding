import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board/entities/board.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Board],
      synchronize: true,
    }),
    BoardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
