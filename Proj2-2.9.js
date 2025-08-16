const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Define the full lowercase alphabet to use for shifting

// encrypt fx
function encrypt(message, shift){
    let encryptedMessage=""; //this is where the new encrypted message will go letter by letter
    let letterCount = 0; //this counts the letters but not punctuation or spaces

    for (let i = 0; i < message.length; i++) { // Loop through each letter in the message one by one

  const letter = message[i];// Get the current letter at position i
  const lowerCaseLetter = letter.toLowerCase(); //lowercase for the alphabet we have
  const index = alphabet.indexOf(lowerCaseLetter); // Find the index (position) of that letter in the alphabet
  
  if(index===-1){   // If the character is not a letter, keep it the same
    encryptedMessage += letter;  //adds it to the message without changing it
    continue;  // Skip to the next letter
  }

  const newIndex = (index + shift) % alphabet.length; // Shift the index forward by x-amount (the Caesar shift!) and loop back aorund if it runs past "z"
  let newLetter = alphabet[newIndex]; // Get the letter at the new shifted index
  
  if (letter === letter.toUpperCase()){   //this makes sure the letter is uppercase if it was before
    newLetter = newLetter.toUpperCase();
  }

  encryptedMessage += newLetter;  //add shifted letter to the new secret encryption
  letterCount++;                  //this will count it as another letter we processed

  if(letterCount % 2 === 0){ //this adds in the random letters for the extra confusion
    const randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];   //this picks the letter using math.random multiplied by the number of letters in the alphabet and using math.floor to give a whole number
    encryptedMessage += randomLetter;       //this adds the random letter into the message
  }
}
    return encryptedMessage;        //this gives the new jumbled message
}

// decrypt fx for every 3rd letter 
function decrypt(encryptedMessage, shift){
    let decryptedMessage="";        //this will be the new readable message that is decrypted
    let letterCount = 0;            //counts the letters

    for (let i=0;i<encryptedMessage.length; i++){ //this runs through the encrypted message letter by letter
    const letter = encryptedMessage[i];             //current character
    const lowerCaseLetter = letter.toLowerCase();   //lowercase again to use in our alphabet
    // don't forget parenthesis on .toLowerCase
    const index = alphabet.indexOf(lowerCaseLetter); //shows the decrypted letter in the alphabet

  if(index===-1){           //keep non-letters as-is
    decryptedMessage += letter; //add without changing
    continue;                   //and onto the next character
  }
 
    letterCount++;      //count it as another letter we have now seen

    if (letterCount % 3===0){   //every 3rd letter is to be ignored
      continue;                 //skip over the letter and does not add it in
    }
  
  const trueShift = shift % alphabet.length;    //takes care of the large shift number problem by making sure it won't loop more than once by making sure it is smaller than the alphabet
  const newIndex=(index-trueShift+alphabet.length)%alphabet.length; //shifts to the new letter by going "backwards"
  let newLetter = alphabet[newIndex]; //shows original letter again

  if (letter===letter.toUpperCase()){   //again making sure that anything that was an uppercase is returned to that state
    newLetter = newLetter.toUpperCase();
  }

  decryptedMessage += newLetter;    //adds the original letter in to the decrypted message
}

  return decryptedMessage;  //this is the full readable and original message
}

// decrypt for every 3rd character
function decryptSecretMessage (message, shift){
    let decodedMessage = "";    //secret message will be stored here
    let position = 0;           //using position instead of letterCount to count everything from letters to punctuation

    for (let i=0; i<message.length; i++){   //loop through the message 1 letter at a time
        const letter = message[i]           //current character
        const lowerCaseLetter = letter.toLowerCase();   //lowercase
        const index = alphabet.indexOf(lowerCaseLetter);    //find it in the alphabet

        position++;        //add everything including spaces and punctuation

        if (position % 3 === 0){    //every 3rd character (even spaces and punctuation) is malarky and needs to be skipped
            continue;               //skip the fake character entirely
        }

         if(index === -1){          //if the chracter is not a letter, keep it how it is
            decodedMessage +=letter;    //added without changing the appearance
            continue;                   //on to the next character
        } 
        
        const trueShift = shift % alphabet.length;  //solving the big shift value again
        const newIndex = (index - trueShift + alphabet.length) % alphabet.length;  //shift backwards again
        let newLetter = alphabet[newIndex];         //gets the originl letter
        
        if(letter===letter.toUpperCase()){
            newLetter = newLetter.toUpperCase()
        }

        decodedMessage += newLetter;    //adds original letter to the decrypted message
    }
        
        return decodedMessage;  //returns the original message as it read before the encryption
    }

                // Received assistance from Claude AI in debugging the decrypt functions
                // and understanding the difference between character vs letter counting

console.log("Testing Basic Encryption/Decryption")
const testMessage = "Hello Brutus"
const testShift = 5

const encrypted = encrypt(testMessage, testShift); //to scramble the message
console.log("Original", testMessage);
console.log("Encrypted", encrypted);

const decrypted = decrypt(encrypted, testShift);    //to unscramble the message
console.log("Decrypted", decrypted);

console.log("Testing Secret Message Decryption")
const secretMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj."
const secretShift = 42;

console.log("Secret Message Decrypted");
console.log(decryptSecretMessage (secretMessage, secretShift)); //unscramble with modified decrypt 




// Additional test to verify encryption/decryption work together
console.log("\n=== Verification Test ===");
const originalText = "Meet me at the gardens.";
const shift = 42;
const encryptedText = encrypt(originalText, shift);
const decryptedText = decrypt(encryptedText, shift);

console.log("Original:", originalText);
console.log("Encrypted:", encryptedText);
console.log("Decrypted back:", decryptedText);
console.log("Match:", originalText.toLowerCase() === decryptedText.toLowerCase());