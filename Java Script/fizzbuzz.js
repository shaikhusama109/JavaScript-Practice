const output = fizzBuzz(30);

function fizzBuzz(input) {

    if (typeof input !== 'number')
        console.log(NaN);

    else if ((input % 3 === 0) && (input % 5 === 0))
        console.log('Fizzbuzz');

    else if (input % 3 === 0)
        console.log('fizz');

    else if (input % 5 === 0)
        console.log('buzz');

    else
        console.log(input);


}
