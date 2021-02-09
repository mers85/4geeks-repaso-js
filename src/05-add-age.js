window.onload = function() {
  console.log("Hello Rigo from the console!");
  let result = addAgeAndSeparateByAge(
    returnArrayWithObject(nombres, apellidos),
    ages
  );
  console.log(result[1], result[2]);
};

let nombres = ["paula", "ysamar", "mayra", "fido", "manuel"];
let apellidos = ["rodriguez", "singh", "ortega", "castillo", "rogers"];
let ages = [11, 23, 24, 54, 15];


//ejercicio 5
function addAgeAndSeparateByAge(arrObject, ages) {
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

//ejercicio 03- 04
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