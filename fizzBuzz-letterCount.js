// FizzBuzz

// You are given a positive integer number `n`, where it is less than 100 (excluded).

// For every number up to `n` (included):

// - Print `Fizz` if the number is divisible by `3`.
// - Print `Buzz` if the number is divisible by `5`.
// - Print `FizzBuzz` if the number is divisible by both `3` and `5`.
// - Print the number if it is not divisible by `3` or `5`.

// Print `Error` if unexpected happens and stop the execution.

function fizzBuzz(n){
    if (!Number.isInteger(n) || n<1 || n>=100)
    {
        console.error("Error");
        return}

    for (let i=1; i<=n; i++)
    {
        const remainderBy3= i%3;
        const remainderBy5= i%5;
    
        if (remainderBy3===0 && remainderBy5===0)
        {
            console.log ("FizzBuzz");
        }
        else if (remainderBy3===0)
        {
            console.log ("Fizz");
        }
        else if (remainderBy5===0)
        {
            console.log ("Buzz");
        }
        else 
        {
            console.log(i);
        }
    }
}


// Letter Count

// You are given a string `word` consisting of alphabetical characters.

// For each unique letter in the `word`:

// - Return the lower-case letter followed by the number of times it occurs in the `word`.

// Print `Error` if unexpected happens and stop the execution.

function letterCount (word) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (typeof word !=="string"){

        console.error("Error");
        return;
    }


    for (const letter of word){
    if (!alphabet.includes(letter.toLowerCase())) {
        console.error("Error");
        return;
    }
    }

        let letterCounts = {}

    for (let letter of word) {
        let lowerCaseLetter = letter.toLowerCase();

        if (letterCounts[lowerCaseLetter] !== undefined){
            letterCounts[lowerCaseLetter]++;
        } else {
        letterCounts[lowerCaseLetter] =1;
        }
    }
        return letterCounts;
}