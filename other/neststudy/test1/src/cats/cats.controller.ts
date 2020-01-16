import { Controller, Get, Post, Body,UseFilters,ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<any> {
    // await sleep(5)
    console.log(999)
    return 'This action adds a new cat';
  }

  @Get('e1')
  a(): any {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, 200);
  }

  @Get('e2')
  @UseFilters(new HttpExceptionFilter())
  b(): any {
    throw new HttpException({
      status: 200,
      error: 'This is a custom message',
    }, 336);
  }
}

const sleep = (timeountMS) => new Promise((resolve) => {
  // console.log(123)
  setTimeout(resolve, timeountMS);
});
// const sleep = (t) => new Promise(r => setTimeout(r, t))