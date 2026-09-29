import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    { id: 1, nombre: 'Rocky', tipo: 'perro' },
    { id: 2, nombre: 'Alcaparra', tipo: 'gato' },
    { id: 3, nombre: 'Salchicha', tipo: 'pájaro' },
  ];

  findOne(id: number) {
    return this.mascotas.find((mascota) => mascota.id === id);
  }
}