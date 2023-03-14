

const baseTab = [];
const arrayMaxLenght = 50;
const arrayMaxNumValue = 50;

const arrayGenOfPrimeNumbers = [];

let randTabElements = randomlyGeneratedNumber(arrayMaxLenght);
let genTabWithPrimeNumbers = genPrimeNumbers(arrayGenOfPrimeNumbers, arrayMaxNumValue);

createRandArrayWithXCells(baseTab, randTabElements,arrayMaxNumValue);
console.log("nieposotowana tablica: " + baseTab);


bubbleSortArray(baseTab, randTabElements);
console.log("posortowana tablica: " + baseTab);






