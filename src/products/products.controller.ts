import { Controller, Param, Get } from '@nestjs/common';
import { PositiveIntPipe } from 'src/pipes/positiveIntPipe';

@Controller('products')
export class ProductsController {
  @Get(':id')
  findOne(@Param('id', PositiveIntPipe) id: number) {
    return {
      message: `Product #${id} found!`,
    };
  }
}
