// Print	out	all	the	numbers	from	1	to	100.	But	for	every	number	divisible	by	3	print	replace it	with	the	
// word	“Fizz,”	for	any	number	divisible	by	5	replace	it	with	the	word	“Buzz”	and	for	a	number	divisible	
// by	both	3	and	5	replace	it	with	the	word	“FizzBuzz.”

//* - i need to print out number 1-100 if % 3 === 0 print fizz
//* -  if num % 5 === 0 print buzz
//* - number % 5 AND 3 === 0  print FizzBuzz 



function fizzBuzz(n) {
    let result = []; //store the resulting numbers within an array

    //loop from 1 to n 
    for (let i = 1; i <= n; i++) {
        let add = ''; //empty variable
        if (i % 3 === 0) {
            add += 'Fizz';
        }
        if (i % 5 === 0) {
            add += 'Buzz';
        }
        if (add === '') {
            result.push(i)
        } else {
            result.push(add);
        }
    }
    return result
};


