

const baseTab = [];


// const randTabElements =  Math.floor(Math.random() * (101));
// console.log(randTabElements);


createRandArrayWithXCells(baseTab);

for(let i = 0 ; i < baseTab.length ; i++)
{
    console.log(baseTab[i]);
}

bubbleSortArray(baseTab);


// for(let i = 0 ; i < baseTab.length ; i++)
// {
//     console.log("bubble sort: " + baseTab[i]);
// }

