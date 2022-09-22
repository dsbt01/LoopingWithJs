// Add your code here
function lyricsGenerator(arr)
{
    let retVal = '';
    let counterOfOne = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] == 1)
        {
            counterOfOne = counterOfOne + 1;
            retVal = retVal + 'Drop the base ';
        }
        
        if (arr[i] == 0)
        {
            counterOfOne = 0;
            retVal = retVal + 'Boom ';
        }

        if (counterOfOne == 3)
        {
            counterOfOne = 0;
            retVal = retVal + '!!!Break the base!!! ';
        }
    }

    return retVal;
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))