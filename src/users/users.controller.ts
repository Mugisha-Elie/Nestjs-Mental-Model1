import { Controller, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { Roles } from 'src/custom/decorators/roles';
import { RolesGuard } from 'src/custom/guards/roles';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  @Get()
  findAll() {
    return { message: 'Accessed a public route!' };
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return { message: `Admin removed user #${id}` };
  }

}
