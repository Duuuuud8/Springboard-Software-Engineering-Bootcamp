const friend = "BRUTUS"

const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

// this is because B is the second letter of the alphabet, but while using Javascript the first number in a series begins with 0, so A would be 0, B would be 1, and so on. (zero-based indexing)

const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];

// using the "%", called the modulus operator, is used to wrap around by using the leftover to begin again with.

const alphabetLength = alphabet.length;

const newIndex = (index + shiftValue) % alphabetLength; 
const encryptedFirstLetter = alphabet[newIndex];

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);