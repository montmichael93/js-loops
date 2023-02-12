// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var clientsLetter = [];
  var clientsLetter = [];
  var character = letter.toUpperCase()

 for (var char of array) {
if(char.name.includes(letter) || char.name.includes(character)) {
 clientsLetter.push(char.name)


}
 }
return clientsLetter

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
