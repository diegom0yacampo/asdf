import { Injectable } from '@nestjs/common';

@Injectable()
export class CriaturasService {
  private criaturas = [
    { id: 1, nombre: 'Flamitas', tipo: 'fuego', emoji: '🔥', likes: 0 },
    { id: 2, nombre: 'Burbú', tipo: 'agua', emoji: '💧', likes: 0 },
    { id: 3, nombre: 'Rayín', tipo: 'eléctrico', emoji: '⚡', likes: 0 },
  ];

  findAll() {
    return this.criaturas;
  }

  findOne(id: number) {
    return this.criaturas.find((criatura) => criatura.id === id);
  }

  darLike(id: number) {
    const criatura = this.criaturas.find((c) => c.id === id);
    if (criatura) {
      criatura.likes++;
    }
    return criatura;
  }
}