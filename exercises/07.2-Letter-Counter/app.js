let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let index = -1;

// your code here
let counts = {};
for(let i in par){
    const letter = par[i].toLowerCase();
    if(letter == ' ' || letter == '') continue;
    if(typeof(counts[letter]) === 'undefined') counts[letter] = 1;
    else counts[letter]++;
}

console.log(counts);