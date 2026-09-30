import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
  private heroes = [
    { id: 1, nombre: 'Spider-Man', poder: 'Sentido arácnido', universo: 'Marvel' },
    { id: 2, nombre: 'Batman', poder: 'Inteligencia e ingeniería', universo: 'DC' },
    { id: 3, nombre: 'Goku', poder: 'Kamehameha', universo: 'Dragon Ball' },
  ];

  findOne(id: number) {
    return this.heroes.find((heroe) => heroe.id === id);
  }
}