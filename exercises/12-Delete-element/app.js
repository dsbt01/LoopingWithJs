var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(personToDelete)
{
    var filteredArray = [];

    filteredArray = people.filter((r) => r != personToDelete);

    return filteredArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
