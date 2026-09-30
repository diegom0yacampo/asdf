# Ejercicio 02 · API de pizzas

Aquí ya metemos un Service, no solo Controller. La idea es separar quien recibe la petición de "quien tiene los datos y la lógica.

## Cómo lo he montado

cd backend
npm install
npm run start:dev

Prueba: http://localhost:3000/pizzas

## Qué he aprendido

- El Controller ya no tiene los datos, solo recibe la petición y se los pide al Service.
- El Service lleva el @Injectable() encima, que es lo que permite que Nest lo pueda inyectar en el Controller sin que yo tenga que hacer new PizzasService() a mano.
- El array de pizzas vive dentro del Service, como si fuera una base de datos falsa mientras no hay una de verdad.

import { PizzasService } from './pizzas.service.js';

Con las librerías de npm (@nestjs/common y tal) no hace falta, solo con mis archivos.

## Pregunta de comprensión

**¿Por qué colocamos el array en el Service y no en el Controller?**

Porque cada uno tiene su función: el Controller se encarga de las rutas y de recibir la petición HTTP, y el Service se encarga de los datos y la lógica. Así si mañana cambio el array por una base de datos de verdad, solo toco el Service y no tengo que tocar el Controller para nada.

## Qué he modificado

He añadido una tercera pizza con emoji, y de paso le puse emoji a todas para que quedara igual de formato:

private pizzas = [
  { id: 1, nombre: 'Margarita', precio: 9, emoji: '🍕' },
  { id: 2, nombre: 'Pepperoni', precio: 11, emoji: '🍕' },
  { id: 3, nombre: 'Hawaiana', precio: 12, emoji: '🍍' },
];

## Resultado

http://localhost:3000/pizzas me devuelve las 3 pizzas con su emoji y precio en JSON.

## Entrega


git add .
git commit -m "Ejercicio 02 - API de pizzas"
git push
