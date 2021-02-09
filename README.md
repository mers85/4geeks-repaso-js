# Hello World with Vanilla JS

Start coding in 30 seconds by opening this template in gitpod:
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/vanillajs-hello.git)

### Manual Installation

1) Remember to install the npm packages first:
```
$ npm install
```

2) Build and Start coding!

Build the application for the first time...

```
$ npm run start
```

And start coding your Vanilla.js application, update the `src/index.html`, `src/index.scss` or `src/index.js` depending on your needs.

## FAQ

#### 1) How do I run my code?

- Type on the command line `$ npm run start` and type localhost on the browser.

#### 2) Where do I write my code?
It depends on the language, but you have `./src/js/index.js`, `./src/style/index.scss` and `./isrc/index.html` respectively, you can add new `.html` as you please, just make sure to include import it on the index.js.

__Note:__ remember that the JS workflow starts inside `window.onload`.

#### 3) I don't see my changes.

Everytime you change any file inside the `./src` folder the website public URL will automatically refresh the changes (it's a process called hot deploy)
Remember also to refresh cleaning the cache (command+shift+r on mac, control+shift+r on pc & linux)

#### 4) How do I include more images on my project?
Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

#### 5) How do I include more JS files?
Just add the files into the JS folder and import the file/variables into your index.js. E.g: `import myVar from "./file2.js"`

#### 6) How do I publish the website?

This boilerplate is 100% compatible with the free github pages hosting. Publish your website by running:
```sh
$ npm run deploy
```

Very easy and in just one step!  Push to your __master__ branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your master branch.


## Ejercicios

1.- Hacer una función que pasandole un array de
números y un número concreto, nos devuelve true si
el número concreto está en el array y false si no está
en el array. Mostrar por consola ambos casos.

2.- Hacer una función que pasandole un listado de
nombres y un listado de apellidos, devuelve un
listado de objetos con el nombre y el apellido en
distintas claves. Mostrar por consola el array
resultante

3.- Modifica el ejercicio II para que use una función que
reciba un nombre y apellido por parametro y nos
devuelva un objeto con el nombre y apellido en
distintas claves. Asegurate de que el nombre y el
apellido se devuelve con la primera letra en
mayúsculas.

4.- Modifica el ejercicio III para que utilice una función
que reciba un texto por parámetro y devuelva el
mismo texto con la primera letra en mayúsculas.

5.- Modifica el ejercicio IV y añade un listado de edades
para cada persona, añade esta edad al listado de
personas generado en los ejercicios anteriores y
divide este array en 2 listados, uno de menores de
edad y otro de mayores de edad. Muestra ambos
listados por consola

6.- Muestra un listado en HTML con el nombre, apellido
y edad de las personas, y otros dos listados con los
menores de edad y los mayores de edad, cada
listado con un titulo que indique a que listado
pertenecen.

7.- Modificar el ejercicio anterior para utilizar una
función que dada una etiqueta de un listado y un
array rellene el listado con las personas del array.
Utiliza también una función que dado un objeto de
persona devuelva su correspondiente HTML para el
listado.

8.- Modificar el ejercicio anterior para detectar cuando
una persona es descendiente de otra persona y
añade entonces a los padres un array que contenga
a sus descendientes, no añadas a los descendientes
al array principal. Tanto padres como descendientes
deben salir en los 3 listados de la web.

9.- Modificar el ejercicio anterior para permitir al usuario
añadir nuevas personas especificando su nombre,
apellido, edad y pulsando un botón o la tecla enter.
Deben actualizarse las listas tras añadirlo.

10.- Modificar el ejercicio anterior para hacer que al
clickar el nombre de una persona en cualquiera de
las listas, muestre un modal (recomiendo utilizar
bootstrap, aunque no es necesario) con los datos de
esa persona y un botón que permita eliminar a esa
persona de los listados, cierre el modal y muestre
los listados actualizados.