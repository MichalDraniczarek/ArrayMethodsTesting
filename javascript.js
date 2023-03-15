

const baseTab = [];
const arrayMaxLenght = 10;
const arrayMaxNumValue = 100;

const arrayGenOfPrimeNumbers = [];
const yourPrimaryNumbers = [];
let arithmeticalMean;
let randTabElements = randomlyGeneratedNumber(arrayMaxLenght);


createRandArrayWithXCells(baseTab, randTabElements,arrayMaxNumValue);
console.log("nieposotowana tablica: " + baseTab);


bubbleSortArray(baseTab, randTabElements);
console.log("posortowana tablica: " + baseTab);


genPrimeNumbers(arrayGenOfPrimeNumbers, arrayMaxNumValue);

console.log("wszystkie liczby: " + arrayGenOfPrimeNumbers);

lookingForPrimeNumbers(baseTab, arrayGenOfPrimeNumbers,yourPrimaryNumbers);


if(!yourPrimaryNumbers.length)
{
    console.log("W twojej tablicy nie ma liczb pierwszych.")
}else{
    console.log("Twoje liczby pierwsze to: " + yourPrimaryNumbers)
}

arithmeticalMean = arithmeticalMeanFn(baseTab, randTabElements);
console.log("średnia: " + arithmeticalMean.toFixed(3));

