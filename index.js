const grades = [85, 90, 75, 96, 60, 55];
const addGrade = (grade) => {
  grades.push(grade);
};
addGrade(67);
const removeFailingGrades = () => {
  for (let item of grades) {
    if (item < 70) {
      grades.splice(grades.indexOf(item), 3);
    }
  }
};
removeFailingGrades();
const printGrades = () => {
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
  }
};
printGrades();

const guests = ["Anna", "", "George", "", "Saba", "Nick", ""];
const cleanList = () => {
  let cleaned = [];
  for (let i = 0; i < guests.length; i++) {
    if (guests[i] !== "") {
      cleaned.splice(guests.indexOf(guests[i]), 0, guests[i]);
    }
  }
  return cleaned;
};
const filteredGuests = cleanList();
console.log(filteredGuests);

const names = ["Mary", "Luka", "Levan", "Tako", "Giorgi", "Ana", "Salome"];
const removeNamesWithLetter = (arr, letter) => {
  let filteredNames = [];
  for (let i = 0; i < arr.length; i += 1) {
    if ((!arr[i].toLowerCase().includes(letter.toLowerCase()))) {
      filteredNames.push(arr[i]);
    }
  }
  return filteredNames;
};
const resultNames = removeNamesWithLetter(names, "m");
console.log(resultNames);