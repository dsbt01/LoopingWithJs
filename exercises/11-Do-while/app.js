let i = 20;

do {
    // Magic goes here;
    
    if (i % 5 == 0)
    {
        console.log(i + '!');
    }
    else
    {
        console.log(i);
    }

    i--;

    if (i === 0)
    {
        console.log("LIFTOFF");
    }
} while (i > 0);
