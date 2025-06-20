const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 1
function encryptLetter (letter, shift){
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length;
    return alphabet[newIndex];
}

// Step 2
function encryptMessage (word, shift)
{
    let encryptedMessage = "";
    for (let i=0; i<word.lenth; i++)
    {
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

// Step 3
function decryptLetter (letter, shift)
{
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length)% alphabet.length;
    return alphabet[newIndex];
}

// Step 4
function decryptMessage (word, shift)
{
    let decryptMessage = "";
    for (let i=0; i<word.length; i++)
    {
        decryptedMessage += decryptLetter(word[i], shift);
    }
    return decryptedMessage;
}

// Question
// Yes, the encryptMessage will use the shiftValue to change BRUTUS and the decryptMessage will do the opposite, they are the same but inversed.