

const baseTab = [];
const arrayMaxLenght = 20;
const arrayMaxNumValue = 100;

const arrayGenOfPrimeNumbers = [];
const yourPrimaryNumbers = [];
let randTabElements = randomlyGeneratedNumber(arrayMaxLenght);


createRandArrayWithXCells(baseTab, randTabElements,arrayMaxNumValue);
console.log("nieposotowana tablica: " + baseTab);


bubbleSortArray(baseTab, randTabElements);
console.log("posortowana tablica: " + baseTab);


genPrimeNumbers(arrayGenOfPrimeNumbers, arrayMaxNumValue);

console.log("wszystkie liczby: " + arrayGenOfPrimeNumbers);

lookingForPrimeNumbers(baseTab, arrayGenOfPrimeNumbers,yourPrimaryNumbers);

console.log("Twoje liczby pierwsze to: " + yourPrimaryNumbers);




