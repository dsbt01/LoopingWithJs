var arr = [45,67,87,23,5,32,60];

//Your code here.
var finalArr =[];

for(let i = arr.length - 1; i >= 0; i--)
{
    finalArr.push(arr[i]);
}

console.log(finalArr);