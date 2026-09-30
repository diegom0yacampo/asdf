# Ejercicio 03 · Busca mascota

Este va de coger un dato concreto de la URL (un id) y usarlo para buscar algo dentro del array, en vez de devolver la lista entera.

## Cómo lo he montado

cd backend
npm install
npm run start:dev

Pruebas:
- http://localhost:3000/mascotas/1 → Rocky
- http://localhost:3000/mascotas/2 → Luna
- http://localhost:3000/mascotas/9 → no sale nada, porque no existe esa mascota (es normal, find() devuelve undefined)

## Qué he aprendido

- @Get(':id') crea una ruta con una parte variable, los dos puntos indican que ahí puede ir cualquier cosa, no es fija.
- @Param('id') es el que saca ese valor de la URL y te lo da como parámetro del método.
- find() recorre el array y te devuelve el primer elemento que cumpla la condición. Si no encuentra nada, te da undefined, no da error ni nada raro.

## Pregunta de comprensión

**¿Qué hace `@Param('id')` en este método?**

Coge el valor que hay en esa posición de la URL (por ejemplo el 2 de /mascotas/2) y se lo pasa al método findOne para que lo pueda usar en la búsqueda.

## Qué he modificado

(aquí pongo la modificación concreta que me pida el cuaderno para este ejercicio, revisar el apartado "Modifícalo")

## Resultado

Al entrar en /mascotas/2 me sale:

{ "id": 2, "nombre": "Luna", "tipo": "gata" }


## Entrega

git add .
git commit -m "Ejercicio 03 - Busca mascota"
git push

