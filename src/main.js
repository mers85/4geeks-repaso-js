/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let names = ["paula", "ysamar", "mayra", "fido", "manuel"];
let surnames = ["rodriguez", "singh", "ortega", "castillo", "Ortega"];
let ages = [11, 23, 24, 54, 15];

window.onload = function() {
  let persons = GetPersonsAndDecendents(names, surnames, ages);
  let result = classifyPersonsByAge(persons);

  let columnListHTML = document.querySelector("#renderLists");
  let allpersons = result.persons;
  let olderPersons = result.olderPersons;
  let youngPersons = result.youngPersons;

  columnListHTML.appendChild(createListHTML(allpersons, "Personas"));
  columnListHTML.appendChild(
    createListHTML(olderPersons, "Personas mayores de edad")
  );
  columnListHTML.appendChild(
    createListHTML(youngPersons, "Personas menores de edad")
  );
};

let form = document.querySelector("#formAddPerson");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let alertDiv = document.querySelector("#alertFormulario");

  let formInputs = event.currentTarget;

  for (let i = 0; i < formInputs.length; i++) {
    let input = formInputs[i];
    console.log(input.value);

    if (input.checkValidity() === false) {
      alertDiv.classList.remove("d-none");
    } else {
      if (input.id === "inputName") {
        names.push(input.value);
        input.value = "";
      } else if (input.id === "inputSurname") {
        surnames.push(input.value);
        input.value = "";
      } else if (input.id === "inputAge") {
        let age = parseInt(input.value);
        ages.push(age);
        input.value = "";
      }
    }
  }

  let persons = GetPersonsAndDecendents(names, surnames, ages);
  let result = classifyPersonsByAge(persons);
  let allpersons = result.persons;
  let olderPersons = result.olderPersons;
  let youngPersons = result.youngPersons;

  let columnListHTML = document.querySelector("#renderLists");
  while (columnListHTML.firstChild) {
    columnListHTML.removeChild(columnListHTML.lastChild);
  }

  columnListHTML.appendChild(createListHTML(allpersons, "Personas"));
  columnListHTML.appendChild(
    createListHTML(olderPersons, "Personas mayores de edad")
  );
  columnListHTML.appendChild(
    createListHTML(youngPersons, "Personas menores de edad")
  );
});

function GetPersonsAndDecendents(names, surnames, ages) {
  let persons = [];

  let name = "";
  let surname = "";
  let age;
  let id;
  let objectPerson = {};

  for (let x = 0; x < names.length; x++) {
    id = x;
    name = names[x];
    surname = surnames[x];
    age = ages[x];
    objectPerson = getPerson(name, surname, age, id);
    persons.push(objectPerson);
  }
  let personsWithDescendets = addDecendentsToperson(persons);
  return personsWithDescendets;
}

// ejercicio 03-04 modificado para recibir la edad ejercicio 5
function getPerson(name, surname, age, id) {
  let newObject = {};

  newObject["surname"] = capitalizeFirstLetter(surname);
  newObject["name"] = capitalizeFirstLetter(name);
  newObject["age"] = age;
  newObject["id"] = id;

  return newObject;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ejercicio 8
function addDecendentsToperson(persons) {
  let personsWithDesc = [];

  for (let i = 0; i < persons.length; i++) {
    persons[i]["decendents"] = [];

    for (let x = 0; x < persons.length; x++) {
      if (
        persons[i].surname === persons[x].surname &&
        persons[i].age > persons[x].age
      ) {
        persons[i].decendents.push(persons[x]);
      }
    }
    personsWithDesc.push(persons[i]);
  }
  return personsWithDesc;
}

//ejercicio 05 mostrar en consola 2 arrays mayores y menores

function classifyPersonsByAge(persons) {
  let olderPersons = [];
  let youngPersons = [];

  for (let i = 0; i < persons.length; i++) {
    let personAge = persons[i].age;
    let person = persons[i];
    if (personAge > 17) {
      olderPersons.push(person);
    } else {
      youngPersons.push(person);
    }
  }

  return {
    persons: persons,
    olderPersons: olderPersons,
    youngPersons: youngPersons
  };
}

// ejercicio 06-07

function createListHTML(persons, titleList) {
  let myNewlist = document.createElement("ul");
  let title = document.createElement("h3");
  title.innerHTML = titleList;
  myNewlist.appendChild(title);

  for (let i = 0; i < persons.length; i++) {
    let person = persons[i];
    let newLi = document.createElement("li");
    newLi.innerHTML += `Id: ${person.id}, Nombre: ${person.name},
                        Apellido: ${person.surname}, edad: ${person.age}`;

    if (person.decendents.length > 0) {
      let decendents = person.decendents;
      let children_id = [];
      for (let x = 0; x < decendents.length; x++) {
        let child_id = decendents[x].id;
        children_id.push(child_id);
      }
      let children_html = children_id.join(", ");
      newLi.innerHTML += `, decendientes_id: ${children_html}`;
    }

    let modalBody = document.querySelector(".modal-body");

    newLi.addEventListener("click", function(event) {
      newLi.setAttribute("data-toggle", "modal");
      newLi.setAttribute("data-target", "#modalOptionRemovePerson");
      let personToDelete = event.target.textContent;
      modalBody.innerHTML = personToDelete;

      let buttonDelete = document.querySelector("#buttonDeletePerson");
      buttonDelete.addEventListener("click", function(event) {
        modalBody.innerHTML = "Persona Eliminada: " + personToDelete + ".";
        newLi.remove();
      });
    });

    myNewlist.appendChild(newLi);
  }
  return myNewlist;
}
