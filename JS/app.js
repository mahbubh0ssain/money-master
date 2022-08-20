// function for get input value
getValueOfInputField = (fieldId) => {
  const fieldElement = document.getElementById(fieldId);
  const fieldElementString = fieldElement.value;
  const fieldElementNumber = parseFloat(fieldElementString);
  return fieldElementNumber;
};

// calculate button event handler
document.getElementById("calculate").addEventListener("click", function () {
  const income = getValueOfInputField("income");
  const food = getValueOfInputField("food");
  const rent = getValueOfInputField("rent");
  const clothes = getValueOfInputField("clothes");
  const totalExpenses = food + rent + clothes;
  if (Number.isNaN(totalExpenses)) {
    return;
  }
  const balance = income - totalExpenses;
  if (totalExpenses > income) {
    alert("Total expenses can't be greater than income.");
    return;
  }
  displayAmount("total-expense", totalExpenses);
  displayAmount("balance", balance);
});

//display amount
displayAmount = (displayId, value) => {
  const element = document.getElementById(displayId);
  element.innerText = value;
};

// save button event handler
document.getElementById("save").addEventListener("click", function () {
  const income = getValueOfInputField("income");
  const percentage = getValueOfInputField("percentage");
  const savedAmount = (income / 100) * percentage;

  const balance = document.getElementById("balance").innerText;
  const remainingBalance = parseFloat(balance) - savedAmount;
  
  if (Number.isNaN(remainingBalance)) {
    return;
  }

  if (savedAmount > balance) {
    alert("Saved amount can't greater than Balance.");
    return;
  }
  displayAmount("save-amount", savedAmount);
  displayAmount("remaining-balance", remainingBalance);
});
