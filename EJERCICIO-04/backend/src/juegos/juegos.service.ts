import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private juegos = [
    { id: 1, titulo: 'WoW', genero: 'mmorpg' },
    { id: 2, titulo: 'FIFA', genero: 'deportes' },
    { id: 3, titulo: 'Minecraft', genero: 'aventura' },
    { id: 4, titulo: 'Tetris', genero: 'puzzle' },
  ];

  findAll(genero?: string) {
    if (!genero) {
      return this.juegos;
    }
    return this.juegos.filter((juego) => juego.genero === genero);
  }
}