import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoleDto } from '../model/role.dto';
import { RoleService } from '../service/role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  async addRole(@Body() roleDto: RoleDto): Promise<RoleDto> {
    return await this.roleService.addRole(roleDto);
  }

  @Get()
  async getAllByCategoryName(
    @Query('categoryName') categoryName: string,
  ): Promise<RoleDto[]> {
    return this.roleService.getAllByCategoryName(categoryName);
  }
}
