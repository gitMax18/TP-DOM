import {
  getRandomNb,
  getRandomItem,
  getMajeur,
  getMineur,
  displayPersons,
  removeChildElement,
} from "./utils.js";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const personsDiv = document.querySelector(".persons");

let persons = [];

const noms = [
  "durand",
  "pierriq",
  "jean",
  "upore",
  "molina",
  "pipo",
  "darius",
  "oli",
  "monti",
  "pierric",
];

const prenoms = [
  "Maxime",
  "Arnaud",
  "Brice",
  "Mickael",
  "Jordan",
  "Alain",
  "Alexis",
  "Pierre",
  "Gerard",
  "Aurélie",
];

const country = ["France", "Italie", "Espagne", "Etat-Unis", "Portugal"];

const createPersonsArray = (nb) => {
  const personsArray = [];

  for (let i = 0; i < nb; i++) {
    const nom = getRandomItem(noms).toUpperCase();
    const prenom = getRandomItem(prenoms);
    const age = getRandomNb(0, 60);
    const pays = getRandomItem(country);

    personsArray.push({ nom, prenom, age, pays });
  }
  return personsArray;
};

const createHtmlPerson = (person) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = `${person.nom} ${person.prenom}`;

  const p = document.createElement("p");
  p.textContent = `${person.age} ans , ${person.pays}`;

  div.appendChild(h2);
  div.appendChild(p);

  return div;
};

window.addEventListener("load", () => {
  persons = createPersonsArray(10);

  persons.forEach((person) => {
    personsDiv.appendChild(createHtmlPerson(person));
  });
});

btn1.addEventListener("click", () => {
  removeChildElement(personsDiv);

  const mineur = getMineur(persons);

  mineur.forEach((person) => {
    personsDiv.appendChild(createHtmlPerson(person));
  });
});

btn2.addEventListener("click", () => {
  removeChildElement(personsDiv);

  const majeur = getMajeur(persons);

  majeur.forEach((person) => {
    personsDiv.appendChild(createHtmlPerson(person));
  });
});

btn3.addEventListener("click", () => {
  removeChildElement(personsDiv);

  persons.forEach((person) => {
    personsDiv.appendChild(createHtmlPerson(person));
  });
});

btn4.addEventListener("click", () => {
  removeChildElement(personsDiv);
  persons = createPersonsArray(10);

  persons.forEach((person) => {
    personsDiv.appendChild(createHtmlPerson(person));
  });
});
