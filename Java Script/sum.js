sum(10);

function sum(limit) {

    for (i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            console.log(i);


}