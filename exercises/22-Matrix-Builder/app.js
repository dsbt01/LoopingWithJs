// Code goes here
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function matrixBuilder(value)
{
    let retVal = [];

    for(let i = 0; i < value; i++)
    {
        var newArray = [];
        for (let j = 0; j < value; j++)
        {
            newArray.push(randomIntFromInterval(0,1));
        }
        retVal.push(newArray);
    }

    return retVal;
}

// do not change anything from this line down
console.log(matrixBuilder(5))