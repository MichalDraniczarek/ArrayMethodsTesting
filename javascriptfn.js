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

            }
        counter++;
    }  

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

    return tab;
}

function lookingForPrimeNumbers(baseTab, primaryNumbers, yourPrimaryNumbers)
{
    let iterations = 0;
    
    for(let j = 0; j < primaryNumbers.length ; j++)
    {
        for(i = iterations ; (i < baseTab.length) ; i++)
        {
            if(primaryNumbers[j] === baseTab[i])
            {
                yourPrimaryNumbers.push(baseTab[i]);
                
                break;
            }else if(baseTab[i] > primaryNumbers[j])
                    {
                        break;
                    }

            iterations++;
        }

        //console.log("Iteracje do znalezienia liczby pierwszej wewnątrz j:" + iterations);
    }
    //console.log("Iteracje do znalezienia liczby pierwszej:" + iterations);
    return yourPrimaryNumbers;
}



function arithmeticalMeanFn(baseTab, nOfElements)
{
    let sum = 0;
    let arithmeticalMean;
    for(let i = 0; i < baseTab.length ; i++)
    {
        sum = sum + baseTab[i];
    }
    console.log("suma: " + sum);
    arithmeticalMean = sum / nOfElements;
    return arithmeticalMean;
}













