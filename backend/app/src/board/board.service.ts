import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  create(board: CreateBoardDto): Promise<Board> {
    const newBoard = this.boardRepository.create(board);
    return this.boardRepository.save(newBoard);
  }

  async findAll() {
    const boardList = await this.boardRepository.find();
    const boardListDto = boardList.map((board) => {
      return { name: board.name, content: board.content };
    });
    return boardListDto;
  }

  async findOne(id: number) {
    const board = await this.boardRepository.findOne({ where: { id } });
    return { name: board.name, content: board.content };
  }

  // update(id: number, updateBoardDto: UpdateBoardDto) {
  //   return `This action updates a #${id} board`;
  // }

  async remove(id: number): Promise<number> {
    await this.boardRepository.delete(id);
    return id;
  }
}
