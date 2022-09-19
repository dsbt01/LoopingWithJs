let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = [];
let letters = {};
let index = -1;

// your code here
letters = Array.from(par.toLowerCase());

for(let i = 0; i < letters.length; i++)
{
    //do not count empty strings
    if (letters[i] != ' ')
    {
        let obj = letters.find(o => o.LetterCode == letters[i]);

         //if -1 then it is not found
         if (index === -1)
         {
            let letterCounter = {
                LetterCode: letters[i],
                LetterCounter: 1
            }

            counts.push(letterCounter);
         }
         else
         {
            let foundLetter = letters[index];
            foundLetter.letterCounter ++;
         }
    }
}

//console.log(counts);