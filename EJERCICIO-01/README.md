# Ejercicio 01 · Hello Backend

## Cómo lo he montado

cd backend
npm install
npm run start:dev

Y luego a probarlo en el navegador: http://localhost:3000/hola

## Qué he aprendido

- Un endpoint no es más que una ruta + un método HTTP (en este caso GET) que responde algo cuando la llamas.
- El @Controller('hola') marca la ruta base, o sea que todo lo que haya dentro de esa clase empieza por /hola.
- Con nest g controller te ahorras crear el archivo a mano y registrarlo tú mismo en el módulo, lo hace la CLI.

## Pregunta de comprensión

**¿Qué función cumple @Get() en este Controller?**

Pues básicamente es el que hace que el método saludar() responda quien haga una petición GET a /hola. Si lo quitas, la clase sigue teniendo @Controller('hola') pero no expone nada, o sea que la ruta no respondería a nada.

## Qué he modificado

El código venía así de fábrica:

{ "mensaje": "¡Hola desde NestJS! 🚀" }


Y yo lo he cambiado para que devuelva esto:

mensaje: ¡Hola desde mi primer backend!,

## Resultado

En http://localhost:3000/hola me sale esto:

  mensaje: ¡Hola desde mi primer backend!,
  curso": DAM

## Entrega

git add .
git commit -m Ejercicio 01 - Hello Backend
git push