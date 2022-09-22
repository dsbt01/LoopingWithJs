

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(localArray)
{
  let arraySize = localArray.length;

  let retVal = {
    totalSlots: 0,
     availableSlots: 0,
     occupiedSlots: 0
  }; 

  for (let i = 0; i < arraySize; i++)
  {
    let innerArray = localArray[i];

    for (let j = 0; j < innerArray.length; j++)
    {
      //do nothing for 0

      //1 occupied
      //2 available
      if (innerArray[j] == 1)
      {
        retVal.totalSlots ++;
        retVal.occupiedSlots ++;
      }

      if (innerArray[j] == 2)
      {
        retVal.totalSlots ++;
        retVal.availableSlots ++;
      }
    }
  }

  return retVal;
}

console.log(getParkingLotState(parking_state))