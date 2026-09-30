import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  private productos = [
    { id: 1, nombre: 'Camiseta', precio: 15 },
    { id: 2, nombre: 'Gorra', precio: 10 },
  ];

  findAll() {
    return this.productos;
  }

  crear(producto: { nombre: string; precio: number }) {
    const nuevo = {
      id: this.productos.length + 1,
      nombre: producto.nombre,
      precio: producto.precio,
    };
    this.productos.push(nuevo);
    return nuevo;
  }
}