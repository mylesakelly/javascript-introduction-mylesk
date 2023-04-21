function calculator() {
    const operation = prompt("Welcome User! Enter operation (+,-,*, or /) and press OK");
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    let result;
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      result = num1 / num2;
    } else {
      alert("Invalid entry made");
      return;
    }
  
    alert(`The result of ${num1} ${operation} ${num2} is ${result}`);
  }
  
  calculator();

