# Ejercicio 04 · Filtra videojuegos

Este es parecido al anterior pero con @Query en vez de @Param. La diferencia está en cómo se manda el dato por la URL.

## Cómo lo he montado

cd backend
npm install
npm run start:dev

Pruebas:
- http://localhost:3000/juegos → todos los juegos
- http://localhost:3000/juegos?genero=aventura → WoW y Minecraft
- http://localhost:3000/juegos?genero=puzzle → Tetris

## Qué he aprendido

- @Query('genero') coge un valor que va después del ? en la URL, y es opcional: si no lo mandas, simplemente llega como undefined.
- Por eso el método del Service tiene genero?: string, la interrogación indica que ese parámetro puede no venir.
- filter() no es lo mismo que find(): find() te da solo el primero que encuentra, filter() te da todos los que cumplen la condición, en forma de array (aunque solo haya uno o ninguno).

## Pregunta de comprensión

**¿En qué se diferencia `@Query` de `@Param`?**

@Param es parte obligatoria de la ruta, tipo /mascotas/2, y si no lo pones la ruta ni siquiera coincide. @Query va después del ? y es opcional, la ruta funciona igual la pongas o no (/juegos y /juegos?genero=aventura son la misma ruta base).

## Qué he modificado

## Resultado

Con ?genero=aventura me salen Zelda y Minecraft en JSON, tal cual esperaba.

## Entrega

git add .
git commit -m "Ejercicio 04 - Filtra videojuegos"
git push

