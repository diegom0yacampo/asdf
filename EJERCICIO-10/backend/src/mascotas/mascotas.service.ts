import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Rocky', tipo: 'perro', likes: 0 },
    { id: 2, nombre: 'Luna', tipo: 'gata', likes: 0 },
  ];

  findOne(id: number) {
    return this.mascotas.find((mascota) => mascota.id === id);
  }

  darLike(id: number) {
    const mascota = this.mascotas.find((m) => m.id === id);
    if (mascota) {
      mascota.likes++;
    }
    return mascota;
  }
}