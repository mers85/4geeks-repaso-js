
window.onload = function() {
  let result = addAgeClassifyPersonByAge(
    returnArrayWithObject(nombres, apellidos),
    ages
  );
  //console.log(result[1], result[2]);
  let container = document.querySelector(".container-fluid");
  let allperson = result[0];
  let mayores = result[1];
  let menores = result[2];

  container.appendChild(createListHTML(result[0], "Personas"));
  container.appendChild(createListHTML(result[1], "Personas mayores de edad"));
  container.appendChild(createListHTML(result[2], "Personas menores de edad"));
};

let nombres = ["paula", "ysamar", "mayra", "fido", "manuel"];
let apellidos = ["rodriguez", "singh", "ortega", "castillo", "rogers"];
let ages = [11, 23, 24, 54, 15];

function createListHTML(arrObject, titleList) {
  let myNewlist = document.createElement("ul");
  let title = document.createElement("h3");
  title.innerHTML = titleList;
  myNewlist.appendChild(title);

  for (let i = 0; i < arrObject.length; i++) {
    let newLi = document.createElement("li");
    console.log(arrObject[i]);
    newLi.innerHTML += `Nombre: ${arrObject[i].nombre} Apellido: ${arrObject[i].apellido}, edad: ${arrObject[i].edad}`;
    myNewlist.appendChild(newLi);
  }
  return myNewlist;
}

function returnArrayWithObject(nombres, apellidos) {
  let newArray = [];

  let nombre = "";
  let apellido = "";
  let object = {};

  for (let x = 0; x < nombres.length; x++) {
    nombre = nombres[x];
    apellido = apellidos[x];
    object = returnPersonObject(nombre, apellido);
    newArray.push(object);
  }

  return newArray;
}

function addAgeClassifyPersonByAge(arrObject, ages) {
  let newArrayMayores = [];
  let newArrayMenores = [];
  let result = [];

  for (let i = 0; i < ages.length; i++) {
    arrObject[i]["edad"] = ages[i];
    if (arrObject[i].edad > 17) {
      newArrayMayores.push(arrObject[i]);
    } else {
      newArrayMenores.push(arrObject[i]);
    }
  }
  result.push(arrObject, newArrayMayores, newArrayMenores);
  return result;
}

// ejercicio 03-04
function returnPersonObject(nombre, apellido) {
  let newObject = {};

  newObject["apellido"] = capitalizeFirstLetter(apellido);
  newObject["nombre"] = capitalizeFirstLetter(nombre);

  return newObject;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
