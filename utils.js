export const getRandomNb = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomItem = (array) => {
  const index = getRandomNb(0, array.length);
  return array[index];
};

export const getMajeur = (personsArray) => {
  return personsArray.filter((person) => person.age >= 18);
};

export const getMineur = (personsArray) => {
  return personsArray.filter((person) => person.age < 18);
};

export const removeChildElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export const displayPersons = (personsArray) => {
  let personsString = "";
  personsArray.forEach((person) => {
    personsString += person.nom + " " + person.prenom + " " + person.age + " ans,";
  });
  return personsString;
};
