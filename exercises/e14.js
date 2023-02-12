
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
 let total = [];
  let sub = [];
  let bal = [];

  for (let account of array) {
    if (account.balance) {
      let bala = 0;
      bala += account.balance
      bal.push(bala)
    } else {
      bal.push(0)
    }

    if (account.deposits) {
      let sum = 0;
      for (let deposit of account.deposits)
        sum += deposit;
      total.push(sum)
    } else {
      total.push(0)

    }

    if (account.withdrawals) {
      let diff = 0;
      for (let withdrawal of account.withdrawals)
        diff += withdrawal;
        sub.push(diff)
    } else {
      sub.push(0)
    }
  }
   let minus = [];
    for(var i = 0; i < total.length; i++){
    minus.push(total[i] - sub[i])

  }
    let acct = [];
    for(var i = 0; i < array.length; i++) {
    if (minus[i] != bal[i]) {
      acct.push(array[i])
    }
    }
      return acct

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
