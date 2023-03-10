



function createRandArrayWithXCells(tab)
{
    const randTabElements =  Math.floor(Math.random() * (5)+1);
    console.log("rand: " + randTabElements);

    for(let i = 0 ; i < randTabElements ; i++)
    {
        const randTabValue =  Math.floor(Math.random() * (101));
        tab.push(randTabValue);
        //console.log(tab[i]);
    }

    //return tab;
}



function bubbleSortArray(tab)
{
   
    for(let i = 0; i < tab.length ; i++ )
        {
           
            if(tab[i] > tab[i + 1])
                {
                    let x = tab[i];
                    tab[i] = tab[i+1];
                    tab[i+1] = x;  
                }
        }
        
    for(let i = 0 ; i < tab.length ; i++)
    {
        console.log("l: " + tab[i]);
    }

        
}

