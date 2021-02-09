/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  returnObject(nombre, apellido);
};

let nombre = "paula";
let apellido = "rodriguez";

function returnObject(nombre, apellido) {
  let newObject = {};

  newObject["apellido"] = capitalizeFirstLetter(apellido);
  newObject["nombre"] = capitalizeFirstLetter(nombre);

  console.log(newObject);
  return newObject;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}