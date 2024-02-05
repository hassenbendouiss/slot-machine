const prompt = require("prompt-sync")();
const deposit = () => {
  const depositAmount = prompt("Enter a deposit amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("invalid deposit amount, try again.");
  }
};
