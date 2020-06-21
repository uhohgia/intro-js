
/*
Using the object from the previous quiz, answer the following quiz question:

Which of the following are valid ways to access properties and call methods from the savingsAccount object?

*/
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};


savingsAccount.balance // dot notation
savingsAccount["balance"] // bracket notation
savingsAccount.withdraw(50); // call the variable that stores the function and pass argument if required
/*
With function expressions, you only need to use the variable name where the function is stored to call the function.
*/