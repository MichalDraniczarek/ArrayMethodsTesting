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
    console.log("counter: " + counter);
}



function genPrimeNumbers(tab, max)
{

}



