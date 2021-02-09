/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  returnArrayWithObject(nombres, apellidos);
};

let nombres = ["Paula", "Ysamar", "Mayra", "Fido", "Manuel"];
let apellidos = ["Rodriguez", "Singh", "Ortega", "Castillo", "Rogers"];

function returnArrayWithObject(nombres, apellidos) {
  let newArray = [];

  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    for (let i = 0; i < apellidos.length; i++) {
      let object = {};
      let apellido = apellidos[i];
      object["nombre"] = nombre;
      object["apellido"] = apellido;
      newArray.push(object);
    }
  }
  console.log(newArray);
  return newArray;
}


// function returnObject(nombre, apellido) {
//   let newObject = {};

//   newObject["apellido"] = capitalizeFirstLetter(apellido);
//   newObject["nombre"] = capitalizeFirstLetter(nombre);

//   console.log(newObject);
//   return newObject;
// }

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }