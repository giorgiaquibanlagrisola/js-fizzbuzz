/*
Numeri da 1 a 100
-Se il numero è multiplo di 3 stampo in console Fizz
-Se il numero è multiplo di 5 spampo in console Buzz
-Se il numero è multiplo sia di 3 che di 5 stampo in console FizzBuzz
*/

for (let i = 1; i <= 100; i++) {
    //console.log(i);

    if ((i % 3 == 0) & (i % 5 == 0)) {
        console.log('FizzBuzz', i);
    }

    else if (i % 3 == 0) {
        console.log('Fizz', i);

    }

    else if (i % 5 == 0) {
        console.log('Buzz', i);
    }
 
    else {
        console.log(i);
    }
    
}