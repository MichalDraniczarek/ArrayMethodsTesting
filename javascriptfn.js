//Randomly generated lenght of array
function randomlyGeneratedNumber(arrayMaxLenght)
{
    let randTabElements =  Math.floor(Math.random() * (arrayMaxLenght)+1);

    return randTabElements;
}

//Randomly generated array with max lenght
function createRandArrayWithXCells(tab, randTabElements, arrayMaxNumValue)
{
    
    console.log("rand: " + randTabElements);
   
        for(let i = 0 ; i < randTabElements ; i++)
        {
            const randTabValue =  Math.floor(Math.random() * (arrayMaxNumValue) + 1);
            tab.push(randTabValue);
        }
        
    return randTabElements;
}


//Sort array with "Bubble Sort" method
function bubbleSortArray(tab, randTabElements)
{
    let counter = 0;
    //let counter1 = 0;
    for(let j = 0; j < randTabElements; j++)
    {
        
        for(let i = 0; i < tab.length - counter ; i++ )
            {
           
                if(tab[i] > tab[i + 1])
                    {
                    let x = tab[i];
                    tab[i] = tab[i+1];
                    tab[i+1] = x;  
                    }
            //counter1++;
            }
        counter++;
    }  
    //console.log("counter: " + counter);
    //console.log("counter1: " + counter1);
}



function genPrimeNumbers(tab, max)
{
    for(let i = 1; i < max ; i++)
    {
        let divider = 0;
        for(let j = 1; j <= i; j++)
        {
            if( i % j == 0)
            {
                divider++;
            }
        }
        if(divider <= 2)
        {
            tab.push(i);
        }
    }
    //console.log("Liczby pierwsze: " + tab);

    return tab;
}

function lookingForPrimeNumbers(baseTab, primaryNumbers, yourPrimaryNumbers)
{
    let iterations = 0;
    let startingElement = 0;
    let temp = 0;
    // const loopLenght = baseTab.length;
    // console.log("loop " + loopLenght);
    for(let j = 0; j < primaryNumbers.length ; j++)
    {
        for(i = iterations ; (i < baseTab.length) ; i++)
        {
            if(primaryNumbers[j] === baseTab[i])
            {
                yourPrimaryNumbers.push(baseTab[i]);
                //startingElement = baseTab[i].length;
                break;
            }else if(baseTab[i] > primaryNumbers[j])
                    {
                        //startingElement = baseTab[i].length;
                        break;
                    }

            iterations++;
            //console.log("baseTab[i]: " + baseTab[i]);
            //console.log("baseTab[i].lenght: " + baseTab[i].length);
            //temp++;
        }
        //startingElement = temp;
        //console.log("statringElement: " +  startingElement);
        console.log("Iteracje do znalezienia liczby pierwszej wewnątrz j:" + iterations);
    }
    console.log("Iteracje do znalezienia liczby pierwszej:" + iterations);
    return yourPrimaryNumbers;
}
