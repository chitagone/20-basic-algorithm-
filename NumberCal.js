const input = "23 * 5";

const calculate = (input) => {
  const inputAsString = String(input);
  let operatorIndex = inputAsString.indexOf("+");

  if (operatorIndex === -1) {
    operatorIndex = inputAsString.indexOf("-");
  }

  if (operatorIndex === -1) {
    operatorIndex = inputAsString.indexOf("*");
  }

  if (operatorIndex === -1) {
    operatorIndex = inputAsString.indexOf("/");
  }

  if (operatorIndex !== -1) {
    const a = Number(inputAsString.substring(0, operatorIndex).trim());
    const b = Number(inputAsString.substring(operatorIndex + 1).trim());

    const op = inputAsString[operatorIndex];

    let result;
    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      default:
        console.log("Unknown operator");
        return;
    }
    console.log(result);
  } else {
    console.log("No valid operator found.");
  }
};

const result = calculate(input);
