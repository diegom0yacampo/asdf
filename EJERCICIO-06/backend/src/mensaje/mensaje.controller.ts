import { Controller, Get } from '@nestjs/common';

@Controller('mensaje')
export class MensajeController {
  @Get()
  obtener() {
    return { texto: 'Conexión establecida con NestJS 🎉' };
  }
}