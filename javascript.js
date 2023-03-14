

const baseTab = [];
const arrayMaxLenght = 100;
const arrayMaxNumValue = 100;

const arrayGenOfPrimeNumbers = [];

let randTabElements = randomlyGeneratedNumber(arrayMaxLenght);


createRandArrayWithXCells(baseTab, randTabElements,arrayMaxNumValue);
console.log("nieposotowana tablica: " + baseTab);


bubbleSortArray(baseTab, randTabElements);
console.log("posortowana tablica: " + baseTab);


genPrimeNumbers(arrayGenOfPrimeNumbers, arrayMaxNumValue);

console.log("liczby pierwsze i ostanie: " + arrayGenOfPrimeNumbers)

lookingForPrimeNumbers(baseTab, arrayGenOfPrimeNumbers)

