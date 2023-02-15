// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var clientsLetter = [];
  var char = letter.toUpperCase()
  for (var customer of array) {
    let hasLetter = false;
    for (var names of customer.name) {
     
       if (names === letter || names === char) {
         hasLetter = true;
       } 
    }
    if (hasLetter) {
      clientsLetter.push(customer.name)
    } 
  }
  return clientsLetter
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
