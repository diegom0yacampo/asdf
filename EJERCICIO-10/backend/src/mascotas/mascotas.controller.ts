import { Controller, Get, Param, Patch } from '@nestjs/common';
import { MascotasService } from './mascotas.service.js';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mascotasService.findOne(Number(id));
  }

  @Patch(':id/like')
  darLike(@Param('id') id: string) {
    return this.mascotasService.darLike(Number(id));
  }
}